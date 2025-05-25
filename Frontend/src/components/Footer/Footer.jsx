import React from 'react';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram, FiGlobe } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Trello</h4>
            <div className="footer-links">
              <a href="#">Log In</a>
              <a href="#">Sign Up</a>
              <a href="#">Pricing</a>
              <a href="#">Apps</a>
              <a href="#">API</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Info</h4>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Blog</a>
              <a href="#">Legal</a>
              <a href="#">Cookie Settings</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Support</h4>
            <div className="footer-links">
              <a href="#">Help</a>
              <a href="#">Contact Support</a>
              <a href="#">Privacy</a>
              <a href="#">Developers</a>
              <a href="#">Status</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Atlassian</h4>
            <div className="footer-links">
              <a href="#">Jira</a>
              <a href="#">Confluence</a>
              <a href="#">Bitbucket</a>
              <a href="#">Statuspage</a>
              <a href="#">Opsgenie</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <img 
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg" 
            alt="Atlassian" 
            className="footer-logo"
          />
          
          <div className="language-select">
            <FiGlobe />
            <span>English</span>
          </div>
          
          <p className="copyright">© 2023 Atlassian</p>
          
          <div className="footer-socials">
            <a href="#" className="social-icon"><FiTwitter /></a>
            <a href="#" className="social-icon"><FiFacebook /></a>
            <a href="#" className="social-icon"><FiLinkedin /></a>
            <a href="#" className="social-icon"><FiInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;