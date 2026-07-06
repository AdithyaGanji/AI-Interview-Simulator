import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStore } from '../../../store/useSessionStore';
import './InterviewSession.css';
import { useConfigStore } from '../../../store/useConfigStore';

function InterviewSession() {
  const navigate = useNavigate();
  const {
    questions, appendAnswer, questionNum, setQuestionNum, finishInterview, isLoading
  } = useSessionStore();
  const { questionCount } = useConfigStore();
  const [ answerText, setAnswerText ] = useState("");

  const currentQuestion = questions[questionNum - 1] || { type: "", question: "" };

  async function handleNext() {
    appendAnswer(answerText);
    if (questionNum <= questionCount - 1) {
      setAnswerText("");
      setQuestionNum(questionNum + 1);
    }
    else {
      const success = await finishInterview();
      if (success)
        navigate("/feedback");
    }
  }

  function handleKeyPress(e) {
    if (!answerText || isLoading)
      return;

    if (e.key === 'Enter' && e.ctrlKey || e.metaKey) {
      e.preventDefault();
      handleNext();
    }
  }
  
  return (
    <div className="session-card-container">
      <div className="session-card">

        <div className="progress-header">
          <span className="question-count-text">Question {questionNum} of {questionCount}</span>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${(100 / questionCount) * questionNum}%` }}></div>
          </div>
        </div>

        <span className={`session-question-type ${currentQuestion.type ? currentQuestion.type.toLowerCase().replace("-", "") : ""}`}>
          {currentQuestion.type}
        </span>
        <h1 className="session-question-text">
          {currentQuestion.question}
        </h1>

        <div className="answer-input-wrapper">
          <textarea
            className="answer-textarea"
            placeholder="Type your answer here..."
            maxLength={2000}
            rows={8}
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            disabled={isLoading}
            onKeyDown={handleKeyPress}
          ></textarea>
          <span className="char-count">{answerText.length}/2000</span>
        </div>
        

        <div className="session-footer">
          <div className="privacy-notice">
            <div className="privacy-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="privacy-lock-icon">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <span className="privacy-text">Your answers will be private and never shared.</span>
          </div>

          <button 
            className="next-question-btn"
            type="button"
            onClick={handleNext}
            disabled={!answerText.length || isLoading}
          >
            {isLoading ? (
              <span className="btn-content-wrapper">
                <svg className="spinner-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                </svg>
                Analyzing answers...
              </span>
            ) : (
              <span className="btn-content-wrapper">
                {questionNum <= questionCount - 1 ? "Next Question" : "Finish Interview"}
                {questionNum <= questionCount - 1 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                )}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InterviewSession;
