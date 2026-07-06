import { useConfigStore } from "../../../../store/useConfigStore";

function RoleSelect() {
  const { selectedRole, setSelectedRole, selectedExperience, setSelectedExperience } = useConfigStore();

  return (
    <>
      <div className="setup-header-wrapper compact">
        <div className="setup-icon-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="setup-title-icon">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="setup-title-group">
          <h2 className="setup-title">Select Role</h2>
          <p className="setup-subtitle">Choose the role you're applying for.</p>
        </div>
      </div>
      
      <div className="select-wrapper">
        <select 
          className={`role-select ${selectedRole === "" ? "placeholder" : ""}`}
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="" disabled>Select your role</option>
          <option value="software-development-engineer">Software Development Engineer (SDE)</option>
          <option value="frontend-developer">Frontend Developer</option>
          <option value="backend-developer">Backend Developer</option>
          <option value="fullstack-developer">Fullstack Developer</option>
          <option value="data-scientist">Data Scientist</option>
          <option value="machine-learning-engineer">Machine Learning Engineer</option>
          <option value="product-manager">Product Manager</option>
          <option value="ui-ux-designer">UI/UX Designer</option>
        </select>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="select-chevron">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <div className="section-divider"></div>

      <div className="setup-header-wrapper compact">
        <div className="setup-icon-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="setup-title-icon">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </div>
        <div className="setup-title-group">
          <h2 className="setup-title">Experience Level</h2>
          <p className="setup-subtitle">Select your total years of experience.</p>
        </div>
      </div>

      <div className="select-wrapper">
        <select 
          className={`role-select ${selectedExperience === "" ? "placeholder" : ""}`}
          value={selectedExperience}
          onChange={(e) => setSelectedExperience(e.target.value)}
        >
          <option value="" disabled>Select your experience level</option>
          <option value="entry-level">Entry Level / Intern (0-1 Years)</option>
          <option value="junior">Junior Developer (1-3 Years)</option>
          <option value="mid-level">Mid-Level Developer (3-5 Years)</option>
          <option value="senior">Senior Developer (5+ Years)</option>
        </select>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="select-chevron">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </>
  );
}

export default RoleSelect;
