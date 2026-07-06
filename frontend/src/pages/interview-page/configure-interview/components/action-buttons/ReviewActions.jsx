import { useConfigStore } from "../../../../../store/useConfigStore";

function ReviewActions() {
  const { setStep, isLoading, handleStartInterview } = useConfigStore();

  return (
    <div className="card-actions vertical">
      <button
        className="back-btn"
        type="button"
        disabled={isLoading}
        onClick={() => setStep(3)}
      >
        <span className="btn-content-wrapper">
          <svg className="btn-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Edit Details
        </span>
      </button>
      
      <button
        className="next-btn"
        type="button"
        disabled={isLoading}
        onClick={handleStartInterview}
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
            Setting up interview...
          </span>
        ) : (
          <span className="btn-content-wrapper">
            Start Interview
            <svg className="btn-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
}

export default ReviewActions;
