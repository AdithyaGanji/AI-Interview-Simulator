import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStore } from '../../store/useSessionStore';
import Navbar from '../../components/navbar/Navbar';
import FeedbackSidebar from './components/FeedbackSidebar';
import FeedbackCritique from './components/FeedbackCritique';
import './FeedbackPage.css';

function FeedbackPage() {
  const navigate = useNavigate();
  const { interviewCompleted, feedback, answers } = useSessionStore();
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);

  useEffect(() => {
    if (!interviewCompleted) {
      navigate("/");
    }
  }, [interviewCompleted]);

  const activeFeedback = feedback || {};
  const activeAnswers = answers || [];
  const feedbacks = activeFeedback.feedbacks || [];

  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === "ArrowRight") {
        setActiveQuestionIdx((prev) => Math.min(prev + 1, feedbacks.length - 1));
      }
      else if (e.key === "ArrowLeft") {
        setActiveQuestionIdx((prev) => Math.max(prev - 1, 0));
      }
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [feedbacks.length]);

  return (
    interviewCompleted && (
      <div className="container">
        <Navbar />
        
        <div className="feedback-dashboard-layout animate-fade-in">

          <FeedbackSidebar feedback={activeFeedback} />

          <FeedbackCritique 
            feedbacks={feedbacks}
            activeAnswers={activeAnswers}
            activeQuestionIdx={activeQuestionIdx}
            setActiveQuestionIdx={setActiveQuestionIdx}
          />
        </div>
      </div>
    )
  );
}

export default FeedbackPage;
