import { useNavigate } from 'react-router-dom';
import { useConfigStore } from '../../../store/useConfigStore';
import { useSessionStore } from '../../../store/useSessionStore';

function FeedbackCritique({ 
  feedbacks, 
  activeAnswers, 
  activeQuestionIdx, 
  setActiveQuestionIdx 
}) {
  const navigate = useNavigate();
  const activeItem = feedbacks[activeQuestionIdx] || {};

  return (
    <div className="feedback-main-content">
      <div className="breakdown-container-card">
        <div className="breakdown-header-block">
          <h2 className="breakdown-title">Question Breakdown</h2>
          <p className="breakdown-subtitle">Review your answers, critiques, and model responses for each question.</p>
        </div>

        <div className="critique-content-area animate-fade-in" key={activeQuestionIdx}>

          <h3 className="critique-active-question">Q{activeQuestionIdx + 1}. {activeItem.question || ""}</h3>

          <div className="critique-detail-section candidate-answer-box">
            <div className="critique-section-header-row">
              <h4 className="critique-section-label text-slate">Your Answer</h4>
              <span className={`score-badge ${activeItem.score >= 8 ? 'good' : activeItem.score >= 6 ? 'medium' : 'poor'}`}>
                Score: {activeItem.score || 0}/10
              </span>
            </div>
            <p className="critique-section-content">{activeAnswers[activeQuestionIdx] || "No answer provided."}</p>
          </div>

          <div className="critique-detail-section critique-feedback-box">
            <h4 className="critique-section-label text-warning">Critique & Gaps</h4>
            <p className="critique-section-content">{activeItem.feedback || ""}</p>
          </div>

          <div className="critique-detail-section model-answer-box">
            <h4 className="critique-section-label text-primary">Model Answer</h4>
            <p className="critique-section-content italic-model">{activeItem.modelAnswer || ""}</p>
          </div>
        </div>

        {feedbacks.length > 1 && (
          <div className="critique-nav-row">
            <button
              className="nav-arrow-btn"
              type="button"
              disabled={activeQuestionIdx === 0}
              onClick={() => setActiveQuestionIdx((prev) => prev - 1)}
            >
              ← Previous
            </button>
            <span className="nav-page-indicator">
              {activeQuestionIdx + 1} of {feedbacks.length}
            </span>
            <button
              className="nav-arrow-btn"
              type="button"
              disabled={activeQuestionIdx === feedbacks.length - 1}
              onClick={() => setActiveQuestionIdx((prev) => prev + 1)}
            >
              Next →
            </button>
          </div>
        )}
      </div>

      <div className="feedback-action-footer">
        <button 
          className="restart-btn" 
          type="button"
          onClick={() => {
            useConfigStore.setState({
              step: 1,
              selectedFile: null,
              selectedRole: "",
              selectedExperience: "",
              questionCount: 5
            });
            useSessionStore.setState({
              questions: [],
              answers: [],
              questionNum: 1,
              feedback: {},
              interviewCompleted: false,
              isLoading: false
            });
            navigate("/");
          }}
        >
          <span className="btn-content-wrapper">
            Start a New Session
          </span>
        </button>
      </div>
    </div>
  );
}

export default FeedbackCritique;
