# Prepup AI

Prepup AI is a full-stack web application designed to help users prepare for technical job interviews through personalized mock interview sessions. It analyzes uploaded resumes, generates diverse interview questions tailored to the user's background, and provides AI-powered feedback to help users identify strengths and improve their interview performance.

## Technology Stack

* **Frontend**: React, React Hot Toast, Zustand, Vanilla CSS
* **Backend**: Node.js, Express.js
* **AI API**: Google GenAI
* **Resume Processing**: express-fileupload and pdf-parse for server-side PDF extraction

## Key Features

### Interview Configuration
- Upload a PDF resume to extract technical skills, experience, and project details.
- Configure the target job role, experience level, and interview length.

### Mock Interview
- Generate a balanced mix of technical, behavioral, situational, and resume-specific questions using the Gemini API, tailored to your background.
- Advance through questions seamlessly using keyboard shortcuts (`Ctrl + Enter` / `Cmd + Enter`) and real-time progress tracking.

### Performance Report
- Receive an overall performance rating (0–100) with personalized feedback, highlighting key strengths and areas for improvement.
- Navigate through individual questions to review personalized critiques, scores (1–10), and AI-generated model answers.

## Live Demo
[Visit Prepup AI Here!](https://prepup-ai.vercel.app/)
