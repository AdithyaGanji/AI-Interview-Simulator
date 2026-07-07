import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <Link to="/" className="navbar-brand">
        <div className="navbar-logo-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" className="sparkle-svg">
            <path d="M12 4C12 8.4 15.6 12 20 12C15.6 12 12 15.6 12 20C12 15.6 8.4 12 4 12C8.4 12 12 8.4 12 4Z" />
            <path d="M6 3C6 4.7 7.3 6 9 6C7.3 6 6 7.3 6 9C6 7.3 4.7 6 3 6C4.7 6 6 4.7 6 3Z" />
            <path d="M18 15.5C18 16.9 19.1 18 20.5 18C19.1 18 18 19.1 18 20.5C18 19.1 16.9 18 15.5 18C16.9 18 18 16.9 18 15.5Z" />
          </svg>
        </div>
        <span className="navbar-title">
          Prepup <span className="title-highlight">AI</span>
        </span>
      </Link>
      <div className="navbar-links">
        <Link to="/how-it-works" className="navbar-link">How It Works</Link>
      </div>
    </nav>
  );
}

export default Navbar;
