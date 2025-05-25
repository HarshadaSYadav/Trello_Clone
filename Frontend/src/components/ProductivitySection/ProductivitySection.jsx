import React from 'react';
import './ProductivitySection.css';

const ProductivitySection = () => {
  return (
    <section className="productivity">
      <div className="productivity-container">
        <div className="productivity-header">
          <p className="productivity-label">Trello 101</p>
          <h2 className="productivity-title">Your productivity powerhouse</h2>
          <p className="productivity-description">
            Stay organized and efficient with Inbox, Boards, and Planner. Every to-do, idea, or responsibility—no matter how small—finds its place, keeping you at the top of your game.
          </p>
        </div>

        <div className="productivity-features">
          <div className="feature-item">
            <div className="feature-indicator inbox"></div>
            <div className="feature-content">
              <h3 className="feature-title">Inbox</h3>
              <p className="feature-description">
                When it's on your mind, it goes in your Inbox. Capture your to-dos from anywhere, anytime.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-indicator boards"></div>
            <div className="feature-content">
              <h3 className="feature-title">Boards</h3>
              <p className="feature-description">
                Your to-do list may be long, but it can be manageable! Keep tabs on everything from "to-dos to tackle" to "mission accomplished!"
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-indicator planner"></div>
            <div className="feature-content">
              <span className="coming-soon-tag">Coming soon</span>
              <h3 className="feature-title">Planner</h3>
              <p className="feature-description">
                Drag, drop, get it done. Snap your top tasks into your calendar and make time for what truly matters.
              </p>
            </div>
          </div>
        </div>

        <div className="productivity-showcase">
          <div className="showcase-image-container">
            <img 
              src="https://images.ctfassets.net/rz1oowkt5gyp/4kCNzLRNfA4G1Bul7Vn9GF/ccd6add60d893013e775d86d3dc82f8c/Carousel_Image_Boards_2x.png"
              alt="Trello Boards and Inbox demonstration" 
              className="showcase-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;