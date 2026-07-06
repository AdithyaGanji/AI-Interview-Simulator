import { useConfigStore } from "../../../../store/useConfigStore";

function QuestionCount() {
  const { questionCount, setQuestionCount } = useConfigStore();

  return (
    <>
      <div className="setup-header-wrapper">
        <div className="setup-icon-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="setup-title-icon">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <line x1="8" y1="11" x2="16" y2="11" />
            <line x1="8" y1="16" x2="16" y2="16" />
          </svg>
        </div>
        <div className="setup-title-group">
          <h2 className="setup-title">Number of Questions</h2>
          <p className="setup-subtitle">Choose the number of questions for this session.</p>
        </div>
      </div>
      
      <div className="range-container">
        <div className="range-value">{questionCount}</div>
        
        <input 
          type="range" 
          min="5" 
          max="15" 
          step="5"
          value={questionCount} 
          onChange={(e) => setQuestionCount(Number(e.target.value))}
          className="question-range-slider"
        />
        
        <div className="range-labels">
          <span>5</span>
          <span>10</span>
          <span>15</span>
        </div>
      </div>
    </>
  );
}

export default QuestionCount;
