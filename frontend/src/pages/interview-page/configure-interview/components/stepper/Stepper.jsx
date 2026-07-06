import { useConfigStore } from '../../../../../store/useConfigStore';
import './Stepper.css';

const stepsData = [
  {
    num: 1,
    header: "Upload Resume",
    subHeader: "Get personalised questions tailored to your resume."
  },
  {
    num: 2,
    header: "Select Target Role",
    subHeader: "Select a role and your years of experience."
  },
  {
    num: 3,
    header: "Interview Duration",
    subHeader: "Select the number of questions for your interview."
  },
  {
    num: 4,
    header: "Review Configuration",
    subHeader: "Review your settings before starting the interview."
  }
];

function Stepper() {
  const { step, isLoading } = useConfigStore();

  return (
    <div className="stepper">
      {stepsData.map((item, index) => {
        const isCompleted = step > item.num || (item.num === 4 && step === 4 && isLoading);
        const isActive = step === item.num && !(item.num === 4 && isLoading);
        const isPending = step < item.num && !(item.num === 4 && isLoading);
        
        let stepClass = "pending";
        if (isCompleted) stepClass = "completed";
        if (isActive) stepClass = "active";

        return (
          <div key={item.num} className={`step-container ${stepClass}`}>
            <div className="step-timeline">
              <div className="step-circle-container">
                {isActive ? (
                  
                  <div className="step-active-ring">
                    <div className="step-number-wrapper active">
                      <span>{item.num}</span>
                    </div>
                  </div>
                ) : (
                  <div className={`step-number-wrapper ${stepClass}`}>
                    <span>{isCompleted ? "✓" : item.num}</span>
                  </div>
                )}
              </div>

              {index < stepsData.length - 1 && (
                <div className={`step-timeline-divider ${isCompleted ? 'completed' : ''}`}></div>
              )}
            </div>

            <div className="step-content">
              <span className={`step-header ${stepClass}`}>
                {item.header}
              </span>
              <span className={`step-sub-header ${stepClass}`}>
                {item.subHeader}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;
