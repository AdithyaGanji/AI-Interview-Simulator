import Navbar from "../../components/navbar/Navbar";
import ConfigurePage from "./configure-interview/ConfigureInterview";
import InterviewSession from "./interview-session/InterviewSession";
import { useConfigStore } from "../../store/useConfigStore";
import './InterviewPage.css';

function InterviewPage() {
  const { step } = useConfigStore();

  return (
    <div className="container">
      <Navbar />
      {
        step <= 4 ? <ConfigurePage /> : <InterviewSession />
      }
    </div>
  )
}

export default InterviewPage;
