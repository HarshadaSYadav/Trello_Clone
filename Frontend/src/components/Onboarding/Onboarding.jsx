import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      navigate('/board-setup', { state: { selectedOption } });
    } else {
      alert('Please select an option before continuing.');
    }
  };

  const handleSkip = () => {
    navigate('/board-setup');
  };

  return (
    <div className="onboarding">
      <div className="onboarding-container">
        <div className="onboarding-left">
          <div className="onboarding-header">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
              alt="Trello"
              className="onboarding-logo"
            />
          </div>
          <div className="onboarding-content">
            <h1 className="onboarding-title">What brings you here today?</h1>
            <div className="onboarding-options">
              <button
                className={`option-button ${selectedOption === 'organize' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('organize')}
              >
                <span className="option-icon">📋</span>
                <span className="option-text">Organize ideas and work</span>
              </button>
              <button
                className={`option-button ${selectedOption === 'track' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('track')}
              >
                <span className="option-icon">📝</span>
                <span className="option-text">Track personal tasks and to-dos</span>
              </button>
              <button
                className={`option-button ${selectedOption === 'manage' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('manage')}
              >
                <span className="option-icon">👥</span>
                <span className="option-text">Manage team projects</span>
              </button>
              <button
                className={`option-button ${selectedOption === 'automate' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('automate')}
              >
                <span className="option-icon">⚡</span>
                <span className="option-text">Create and automate your team's workflows</span>
              </button>
            </div>
            <div className="onboarding-actions">
              <button className="continue-button" onClick={handleContinue}>Continue</button>
              <button className="skip-button" onClick={handleSkip}>Skip</button>
            </div>
          </div>
        </div>
        <div className="onboarding-right">
          <img
            src="https://files.planyway.com/strapi-uploads/assets/trello_board_d8ccc58a16.png"
            alt="Trello Board Preview"
            className="preview-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;