import { useConfigStore } from "../../../../store/useConfigStore";

const roleLabels = {
  "software-development-engineer": "Software Development Engineer",
  "frontend-developer": "Frontend Developer",
  "backend-developer": "Backend Developer",
  "fullstack-developer": "Fullstack Developer",
  "data-scientist": "Data Scientist",
  "machine-learning-engineer": "Machine Learning Engineer",
  "product-manager": "Product Manager",
  "ui-ux-designer": "UI/UX Designer"
};

const experienceLabels = {
  "entry-level": "Entry Level / Intern (0-1 Years)",
  "junior": "Junior Developer (1-3 Years)",
  "mid-level": "Mid-Level Developer (3-5 Years)",
  "senior": "Senior Developer (5+ Years)"
};

function FinalReview() {
  const { selectedFile, selectedRole, selectedExperience, questionCount } = useConfigStore();

  return (
    <>
      <div className="setup-header-wrapper">
        <div className="setup-icon-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="setup-title-icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <polyline points="9 15 11 17 15 13" />
          </svg>
        </div>
        <div className="setup-title-group">
          <h2 className="setup-title">Final Review</h2>
          <p className="setup-subtitle">Please review your details before starting the interview.</p>
        </div>
      </div>
      
      <div className="review-box">

        <div className="review-row">
          <div className="review-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="review-row-icon">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </div>
          <div className="review-info">
            <span className="review-label">Resume</span>
            <span className="review-value" title={selectedFile?.name}>{selectedFile?.name || "No file uploaded"}</span>
          </div>
        </div>

        <div className="review-row">
          <div className="review-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="review-row-icon">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="review-info">
            <span className="review-label">Role</span>
            <span className="review-value">{roleLabels[selectedRole] || selectedRole || "No role selected"}</span>
          </div>
        </div>

        <div className="review-row">
          <div className="review-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="review-row-icon">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <div className="review-info">
            <span className="review-label">Experience Level</span>
            <span className="review-value">{experienceLabels[selectedExperience] || selectedExperience || "No experience selected"}</span>
          </div>
        </div>

        <div className="review-row">
          <div className="review-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="review-row-icon">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              <line x1="8" y1="11" x2="16" y2="11" />
              <line x1="8" y1="16" x2="16" y2="16" />
            </svg>
          </div>
          <div className="review-info">
            <span className="review-label">Number of Questions</span>
            <span className="review-value">{questionCount} Questions</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinalReview;
