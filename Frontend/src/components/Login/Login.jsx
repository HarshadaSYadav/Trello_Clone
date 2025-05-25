import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login success");
        localStorage.setItem('userEmail', email); // Store the email in localStorage
        localStorage.setItem('token', data.token); // Store the token in localStorage (if returned)
        navigate('/dashboard'); // Navigate to the dashboard page
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Login error", err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <img
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
          alt="Trello"
          className="login-logo"
        />
        <h1 className="login-title">Log in to continue</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            className="login-input"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="login-button">
            Continue
          </button>
        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <button className="social-button">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/267584bf90783090ede8f337d9baf909/google-logo.svg"
              alt="Google"
              className="social-icon"
            />
            Google
          </button>
          <button className="social-button">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/267584bf90783090ede8f337d9baf909/microsoft-logo.svg"
              alt="Microsoft"
              className="social-icon"
            />
            Microsoft
          </button>
          <button className="social-button">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/267584bf90783090ede8f337d9baf909/apple-logo.svg"
              alt="Apple"
              className="social-icon"
            />
            Apple
          </button>
          <button className="social-button">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/267584bf90783090ede8f337d9baf909/slack-logo.svg"
              alt="Slack"
              className="social-icon"
            />
            Slack
          </button>
        </div>

        <p className="signup-link">
          Can't log in? <Link to="/signup">Sign up for an account</Link>
        </p>

        <div className="atlassian-footer">
          <img
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
          alt="Atlassian"
          className="atlassian-logo"
          />
          <p className="footer-text">
            One account for Trello, Jira, Confluence and <a href="#">more</a>
          </p>
          <p className="footer-links">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="#" target="_blank" rel="noopener">Privacy Policy</a>
            {' '}and{' '}
            <a href="#" target="_blank" rel="noopener">Terms of Service</a>
            {' '}apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
