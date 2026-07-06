import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/home-page/HomePage";
import InterviewPage from "./pages/interview-page/InterviewPage";
import FeedbackPage from "./pages/feedback-page/FeedbackPage";
import HowItWorksPage from "./pages/how-it-works-page/HowItWorksPage";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: '1.45rem',
            fontWeight: '450',
            padding: '1.2rem 2.4rem',
            borderRadius: '12px',
            maxWidth: '48rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            border: '1px solid #f1f5f9',
          }
        }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
      </Routes>
    </>
  )
}

export default App
