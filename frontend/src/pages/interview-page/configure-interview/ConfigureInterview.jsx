import ResumeUpload from './components/ResumeUpload';
import RoleSelect from './components/RoleSelect';
import QuestionCount from './components/QuestionCount';
import FinalReview from './components/FinalReview';
import SetupActions from './components/action-buttons/SetupActions';
import ReviewActions from './components/action-buttons/ReviewActions';
import Stepper from './components/stepper/Stepper';
import { useConfigStore } from '../../../store/useConfigStore';
import './ConfigureInterview.css';

function ConfigurePage() {
  const { step } = useConfigStore();

  return (
    <div className="setup-card-container">

      <div className="ambient-orb orb-top-left-config"></div>
      <div className="ambient-orb orb-bottom-right-config"></div>

      <div className="sidebar-stepper">
        <Stepper />
      </div>
      <div className="setup-card">
        {step === 1 && <ResumeUpload />}
        {step === 2 && <RoleSelect />}
        {step === 3 && <QuestionCount />}
        {step === 4 && <FinalReview />}

        {
          step < 4 ? <SetupActions /> : <ReviewActions />
        }
      </div>
    </div>
  );
}

export default ConfigurePage;
