import React from 'react';
import './WorkSmarter.css';

const WorkSmarter = () => {
  return (
    <>
      <section className="work-smarter">
        <div className="work-smarter-container">
          <p className="work-smarter-label">WORK SMARTER</p>
          <h2 className="work-smarter-title">Do more with Trello</h2>
          <p className="work-smarter-description">
            Customize the way you organize with easy integrations, automation, and mirroring of your to-dos across multiple locations.
          </p>
          
          <div className="features-grid">
            <div className="feature">
              <img 
                src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/white-puzzle-piece.svg"
                alt="Integrations"
                className="feature-icon"
              />
              <h3 className="feature-title">Integrations</h3>
              <p className="feature-description">
                Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.
              </p>
              <a href="#" className="feature-link">Browse Integrations</a>
            </div>
            
            <div className="feature">
              <img 
                src="https://images.ctfassets.net/rz1oowkt5gyp/7nXoP6v6K5p0YaYZJi3h6n/4c33735632f7c402c0fc394235dc25cf/butler.svg"
                alt="Butler Automation"
                className="feature-icon"
              />
              <h3 className="feature-title">Butler Automation</h3>
              <p className="feature-description">
                No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.
              </p>
              <a href="#" className="feature-link">Get to know Automation</a>
            </div>
            
            <div className="feature">
              <img 
                src="https://images.ctfassets.net/rz1oowkt5gyp/2DKAZWxGxjXYVzf89SYeyk/fd02bd3faa2c1a329e19e21f8f954f33/card-back.svg"
                alt="Card mirroring"
                className="feature-icon"
              />
              <h3 className="feature-title">Card mirroring</h3>
              <p className="feature-description">
                View your to-dos from different boards in more than one place. Mirror a card to keep track of work wherever you need it!
              </p>
            </div>
          </div>
        </div>
        
        <div className="testimonial-section">
          <div className="testimonial-container">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                [Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.
              </p>
              <p className="testimonial-author">Joey Rosenberg</p>
              <p className="testimonial-role">Global Leadership Director at Women Who Code</p>
              <img 
                src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/white-puzzle-piece.svg"
                alt="Women Who Code"
                className="testimonial-logo"
              />
              <a href="#" className="feature-link">Read the story</a>
            </div>
            
            <div className="testimonial-stat">
              <p className="stat-number">75% of organizations</p>
              <p className="stat-text">report that Trello delivers value to their business within 30 days.</p>
              <p className="stat-source">
                <a href="#">Trello TechValidate Survey</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="companies">
          <h3 className="companies-title">Join a community of millions of users globally who are using Trello to get more done.</h3>
          <div className="company-logos">
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/visa.svg" alt="Visa" className="company-logo" />
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/coinbase.svg" alt="Coinbase" className="company-logo" />
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/john-deere.svg" alt="John Deere" className="company-logo" />
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/zoom.svg" alt="Zoom" className="company-logo" />
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/grand-hyatt.svg" alt="Grand Hyatt" className="company-logo" />
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/fender.svg" alt="Fender" className="company-logo" />
          </div>
        </div>
        
        <div className="signup-section">
          <h2 className="signup-title">Get started with Trello today</h2>
          <form className="signup-form">
            <input
              type="email"
              className="signup-input"
              placeholder="Email"
              required
            />
            <button type="submit" className="signup-button">
              Sign up - it's free!
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default WorkSmarter;