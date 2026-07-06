import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage-wrapper">

      <div className="ambient-orb orb-top-left-home"></div>
      <div className="ambient-orb orb-bottom-right-home"></div>

      <div className="container">
        <Navbar />


        <main className="hero-section">
          <h1 className="hero-title">
            <span>Ace your next</span>
            <br />
            <span className="highlight-wrapper">
              <span className="gradient-text">interview with AI</span>
              <svg className="sketch-underline" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5C30 3 100 2 198 5C140 6 70 7 15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </h1>
          <p className="hero-description">
            Upload your resume, choose your role, and let AI generate a personalized mock interview with instant feedback.
          </p>
          <Link to='/interview'>
            <button className="hero-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="sparkle-svg">
                <path d="M12 4C12 8.4 15.6 12 20 12C15.6 12 12 15.6 12 20C12 15.6 8.4 12 4 12C8.4 12 12 8.4 12 4Z" />
                <path d="M6 3C6 4.7 7.3 6 9 6C7.3 6 6 7.3 6 9C6 7.3 4.7 6 3 6C4.7 6 6 4.7 6 3Z" />
                <path d="M18 15.5C18 16.9 19.1 18 20.5 18C19.1 18 18 19.1 18 20.5C18 19.1 16.9 18 15.5 18C16.9 18 18 16.9 18 15.5Z" />
              </svg>
              <span className="hero-btn-text">Start Interview</span>
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
