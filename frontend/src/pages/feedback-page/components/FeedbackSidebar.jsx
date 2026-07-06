function FeedbackSidebar({ feedback }) {
  const activeFeedback = feedback || {};
  const strengths = activeFeedback.strengths || [];
  const improvements = activeFeedback.improvements || [];

  return (
    <div className="feedback-sidebar">
      <div className="feedback-sidebar-card">

        <div className="sidebar-score-row">
          <div className="score-circle-wrapper">
            <svg className="score-svg" viewBox="0 0 120 120">
              <circle className="score-bg-circle" cx="60" cy="60" r="50" />
              <circle 
                className="score-fill-circle" 
                cx="60" 
                cy="60" 
                r="50" 
                strokeDasharray="314.16" 
                strokeDashoffset={314.16 - (314.16 * (activeFeedback.overallScore || 0)) / 100}
              />
            </svg>
            <div className="score-content">
              <span className="score-number">{activeFeedback.overallScore || 0}%</span>
            </div>
          </div>
          <div className="sidebar-hero-text">
            <h2 className="sidebar-title">Evaluation Summary</h2>
            <p className="sidebar-subtitle">Performance report overview.</p>
          </div>
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title text-success">Key Strengths</h3>
          <ul className="sidebar-list">
            {strengths.map((strength, index) => (
              <li key={index} className="sidebar-list-item">
                <span className="list-bullet bg-success-tint">✓</span>
                <p className="sidebar-list-text">{strength}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title text-warning">Areas for Growth</h3>
          <ul className="sidebar-list">
            {improvements.map((improvement, index) => (
              <li key={index} className="sidebar-list-item">
                <span className="list-bullet bg-warning-tint">→</span>
                <p className="sidebar-list-text">{improvement}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-section sidebar-tip-section">
          <h3 className="sidebar-section-title text-primary">Tip</h3>
          <p className="tip-text">{activeFeedback.tip || ""}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSidebar;
