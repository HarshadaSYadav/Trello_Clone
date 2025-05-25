import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
  
    try {
      const response = await fetch('https://trello-clone-rc7n.vercel.app/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Store token and email in localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('token', data.token);
        navigate('/onboarding');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Signup error", err);
    }
  };
  

  const googleLogin = useGoogleLogin({
    onSuccess: () => {
      navigate('/onboarding');
    },
    onError: () => {
      console.log('Google login failed');
    }
  });

  return (
    <div className="signup-page">
      <div className="signup-background-left" />
      <div className="signup-content">
        <img
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
          alt="Trello"
          className="signup-logo"
        />
        <h1 className="signup-title">Sign up to continue</h1>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="email"
            className="signup-input"
            placeholder="Enter your email"
            required
          />
          <p className="signup-terms">
            By signing up, I accept the Atlassian{' '}
            <a href="#" target="_blank" rel="noopener">Cloud Terms of Service</a>
            {' '}and acknowledge the{' '}
            <a href="#" target="_blank" rel="noopener">Privacy Policy</a>
          </p>
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </form>

        <div className="signup-divider">
          <span>Or continue with:</span>
        </div>

        <div className="social-buttons">
          <button className="social-button" onClick={() => googleLogin()}>
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

        <p className="login-link">
          Already have an Atlassian account? <Link to="/login">Log in</Link>
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
      <div className="signup-background-right" />
    </div>
  );
};

export default SignUp;
