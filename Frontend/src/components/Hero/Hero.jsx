import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Capture, organize, and tackle your to-dos from anywhere.
          </h1>
          <p className="hero-subtitle">
            Escape the clutter and chaos—unleash your productivity with Trello.
          </p>
          <form className="hero-form">
            <input
              type="email"
              className="hero-input"
              placeholder="Email"
              required
            />
            <Link to="/signup" className="hero-button">
              Sign up - it's free!
            </Link>
          </form>
          <a href="#" className="watch-video">
            <span className="video-icon"><FiPlay /></span>
            Watch video
          </a>
        </div>
        <div className="hero-image">
          <div className="hero-bg-shape"></div>
          <div className="hero-bg-shape-2"></div>
          <img 
            src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=540" 
            alt="Trello mobile app" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;