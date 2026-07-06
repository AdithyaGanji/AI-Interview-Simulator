import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import { generateFeedback, generateQuestions, parsePDF } from "./lib/utils.js";
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.use(express.json());
app.use(cors({
	origin: [
		"http://localhost:5173",
		"https://prepup-ai.vercel.app"
	]
}));
app.use(fileUpload());

app.post('/get-questions', async (req, res) => {
	const { selectedRole, selectedExperience, questionCount } = req.body;

	const fileBuffer = req.files?.file?.data;
	const resumeContent = await parsePDF(fileBuffer);

	try {
		const response = await ai.models.generateContent({
			model: 'gemini-3.1-flash-lite',
			contents: generateQuestions(selectedRole, selectedExperience, questionCount, resumeContent),
		});

		const parsedQuestions = JSON.parse(response.text);
		res.status(200).json({ parsedQuestions });
	} catch (error) {
		console.error('Gemini API Error:', error);
		res.status(500).json({ error: 'Failed to generate content from Gemini API.' });
	}
});

app.post(
	'/get-feedback',
	async (req, res) => {
		const { selectedRole, selectedExperience } = req.body;
		const questions = JSON.parse(req.body.questions || '[]');
		const answers = JSON.parse(req.body.answers || '[]');

		const fileBuffer = req.files?.file?.data;
		const resumeContent = await parsePDF(fileBuffer);

		try {
			const response = await ai.models.generateContent({
				model: 'gemini-3.1-flash-lite',
				contents: generateFeedback(selectedRole, selectedExperience, resumeContent, questions, answers),
			});

			const parsedFeedback = JSON.parse(response.text);
			res.status(200).json({ parsedFeedback });
		} catch (error) {
			console.error('Gemini API Error:', error);
			res.status(500).json({ error: 'Failed to generate content from Gemini API.' });
		}
	}
);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
