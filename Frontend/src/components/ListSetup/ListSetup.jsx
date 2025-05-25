import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListSetup.css';

const ListSetup = () => {
  const [lists, setLists] = useState({
    list1: '',
    list2: '',
    list3: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e, listKey) => {
    setLists({
      ...lists,
      [listKey]: e.target.value
    });
  };

  const handleNext = () => {
    navigate('/invite-team');
  };

  const handleBack = () => {
    navigate('/board-setup');
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <div className="list-setup">
      <div className="list-setup-container">
        <div className="list-setup-left">
          <div className="list-setup-header">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
              alt="Trello"
              className="list-setup-logo"
            />
          </div>
          <div className="list-setup-content">
            <h1 className="list-setup-title">Now organize your board with lists</h1>
            <p className="list-setup-description">
              A list is a bundle of cards that represent milestones, a set of ideas, or team goals. Customize your lists and add as many as you'd like.
            </p>
            <p className="list-setup-subtitle">A lot of people start with:</p>
            <div className="list-setup-form">
              <input
                type="text"
                className="list-input"
                placeholder="e.g., To do"
                value={lists.list1}
                onChange={(e) => handleInputChange(e, 'list1')}
              />
              <input
                type="text"
                className="list-input"
                placeholder="e.g., Doing"
                value={lists.list2}
                onChange={(e) => handleInputChange(e, 'list2')}
              />
              <input
                type="text"
                className="list-input"
                placeholder="e.g., Done"
                value={lists.list3}
                onChange={(e) => handleInputChange(e, 'list3')}
              />
              <button 
                className="next-button"
                onClick={handleNext}
              >
                Next
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
        <div className="list-setup-right">
          <div className="list-preview">
            <img
              src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6M1GtXXZPp4v/fbdbe7f9f8ae1dafa6b47f3e1cc5fd1b/list-preview.svg"
              alt="List Preview"
              className="preview-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSetup;