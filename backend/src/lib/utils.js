import { PDFParse } from "pdf-parse";

export function generateQuestions(role, experience, questionCount, resumeContent) {
  return `
    You are an expert technical recruiter and interviewer. Generate a list of diverse interview questions for a candidate based on their target role, experience level, resume content, and the requested number of questions.

    ---

    INPUT VARIABLES:
    - Target Role: ${role}
    - Experience Level: ${experience}
    - Number of Questions: ${questionCount}
    - Resume Content: ${resumeContent}

    ---

    CRITICAL REQUIREMENTS:
    1. DIVERSITY: The questions must be split across different types:
      - "Technical": Questions covering core technical concepts, system design, or engineering decisions relevant to the ${role} at a ${experience} level.
      - "Behavioral": STAR-method questions focusing on teamwork, overcoming challenges, conflict resolution, or leadership.
      - "Situational": Scenario-based questions testing problem-solving.
      - "Resume-Specific": Questions targeting specific projects, technologies, or accomplishments listed in the candidate's resume content.

    2. TAILORING: Do not ask generic questions. Every question should be contextualized to the candidate's experience level (${experience}) and skills found in the resume.

    3. OUTPUT FORMAT: Respond ONLY with a valid, raw JSON array of objects. Do not include markdown code block formatting.

    ---

    JSON OUTPUT STRUCTURE:
      [
        {
          "id": 1,
          "type": "Technical | Behavioral | Situational | Resume-Specific",
          "question": "The question text here."
        }
      ]
  `
}

export function generateFeedback(role, experience, resumeContent, questions, answers) {
  const QandASection = questions.map((q, index) => {
    const candidateAnswer = answers[index] || "No answer provided.";
    return `
      Question ID: ${q.id}
      Type: ${q.type}
      Question: ${q.question}
      Candidate's Answer: ${candidateAnswer}
      ----------------------------------------`;
  }).join("\n");

  return `
    You are an expert technical interviewer and recruiter. Analyze the candidate's performance during their mock interview for the target role of "${role}". Evaluate their answers based on their resume content, technical accuracy, relevance to the job role, and communication clarity. Speak directly to the user in the second person ("You", "Your") across all feedback content. Never refer to them as "the candidate".

    ---

    INPUT DATA:
    - Target Role: ${role}
    - Experience: ${experience}
    - Resume Content:
    ${resumeContent}
    - Interview Q&A Transcript:
    ${QandASection}

    ---

    CRITICAL REQUIREMENTS:
    1. CONSTRUCTIVE FEEDBACK: 
      - Be professional, direct, and constructive. Highlight technical gaps, inaccuracies, or areas where the candidate could have been more specific.

      - Focus purely on evaluation and what was missing. If the candidate's answer is irrelevant, empty, gibberish, or placeholder text (like "Lorem ipsum" or "test"), you must give a score of 0 and state that no valid answer was provided.

    2. SCORING SYSTEM: Provide an overall score (0 to 100) and an individual score (0 to 10) for each question.

    3. MODEL ANSWERS: For each question, provide a short, high-quality "Model Answer" showing how a senior developer or top candidate would have responded to the question, using details from the resume where applicable.

    4. STRENGTHS & IMPROVEMENTS: Provide at most 3 strengths and at most 3 improvements. Each point must be a simple, single, concise sentence.

    5. EXPERT TIP: The overall tip must be a simple, highly actionable guidance consisting of at most 3 short sentences.

    6. OUTPUT FORMAT: Respond ONLY with a valid, raw JSON object. Do not include markdown code block formatting.

    7. NOTE:
      - Do NOT use markdown bold formatting (no double asterisks **) anywhere.
      - Do NOT quote, restate, or refer to the candidate's exact answer text (e.g., do not say "The candidate's response..." or "You answered...") inside anywhere.
      - Do NOT refer to the user in the third person (do not use "the candidate", "candidate", "they", or "their"). Always address them directly using "You", "Your", or "Yours" (e.g., say "You possess..." instead of "The candidate possesses...").

    ---

    JSON OUTPUT STRUCTURE:
    {
      "overallScore": 85,
      "overallFeedback": "A concise summary of their overall performance.",
      "feedbacks": [
        {
          "question": "The question text here.",
          "score": 8,
          "feedback": "Constructive evaluation of the candidate's specific answer.",
          "modelAnswer": "A short, high-quality sample response."
        }
      ],
      "strengths": [
        "Strength area 1...",
        "Strength area 2...",
        "Strength area 3..."
      ],
      "improvements": [
        "Improvement area 1...",
        "Improvement area 2...",
        "Improvement area 3..."
      ],
      "tip": "An overall tip..."
    }
  `;
}

export async function parsePDF(fileBuffer) {
  const parser = new PDFParse({ data: fileBuffer });
  const result = await parser.getText();
  return result.text;
}
