import { useConfigStore } from "../../../../../store/useConfigStore";

function SetupActions() {
  const { step, setStep, selectedFile, selectedRole, selectedExperience } = useConfigStore();

  return (
    <div className="card-actions">
      {step >= 2 && (
        <button
          className="back-btn"
          type="button"
          onClick={() => setStep(Math.max(step - 1, 1))}
        >
          Back
        </button>
      )}
      <button
        className="next-btn"
        type="button"
        disabled={
          (step === 1 && !selectedFile) ||
          (step === 2 && (!selectedRole || !selectedExperience))
        }
        onClick={() => setStep(Math.min(step + 1, 4))}
      >
        Next
      </button>
    </div>
  );
}

export default SetupActions;
