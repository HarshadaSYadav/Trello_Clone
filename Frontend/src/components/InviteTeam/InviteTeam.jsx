import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InviteTeam.css';

const InviteTeam = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/dashboard');
  };

  const handleBack = () => {
    navigate('/list-setup');
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <div className="invite-team">
      <div className="invite-team-container">
        <div className="invite-team-left">
          <div className="invite-team-header">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
              alt="Trello"
              className="invite-team-logo"
            />
          </div>
          <div className="invite-team-content">
            <h1 className="invite-team-title">Invite your team</h1>
            <p className="invite-team-description">
              You're all set! Invite your teammates to collaborate with you.
            </p>
            <div className="invite-team-form">
              <input
                type="text"
                className="invite-input"
                placeholder="e.g., jessica@gmail.com, Jessica Smith"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                className="next-button"
                onClick={handleNext}
              >
                One last thing
              </button>
            </div>
            <div className="navigation-buttons">
              <button className="back-button" onClick={handleBack}>
                ← Back
              </button>
              <button className="skip-button" onClick={handleSkip}>
                Skip
              </button>
            </div>
          </div>
        </div>
        <div className="invite-team-right">
          <div className="invite-preview">
            <img
              src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/invite-preview.svg"
              alt="Invite Preview"
              className="preview-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteTeam;