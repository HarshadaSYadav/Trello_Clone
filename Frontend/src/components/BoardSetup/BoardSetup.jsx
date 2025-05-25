import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BoardSetup.css';

const BoardSetup = () => {
  const [boardName, setBoardName] = useState('');
  const navigate = useNavigate();

  const handleNext = async () => {
    if (boardName.trim()) {
      try {
        const response = await fetch('https://trello-clone-nu-opal.vercel.app/api/boards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Ensure token is sent correctly
          },
          body: JSON.stringify({ boardName }),
        });

        if (!response.ok) {
          const errorText = await response.text(); // Read the response as text
          throw new Error(`Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        alert('Board created successfully');
        navigate('/dashboard');
      } catch (error) {
        console.error('Error saving board:', error);
        alert('An error occurred while saving the board. Please try again.');
      }
    }
  };

  const handleBack = () => {
    navigate('/onboarding');
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <div className="board-setup">
      <div className="board-setup-container">
        <div className="board-setup-left">
          <div className="board-setup-header">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
              alt="Trello"
              className="board-setup-logo"
            />
          </div>
          <div className="board-setup-content">
            <h1 className="board-setup-title">It all starts with the board</h1>
            <p className="board-setup-description">
              A board is where work happens in Trello. You'll find your cards, lists, due dates, and more to keep you organized and on track.
            </p>
            <div className="board-setup-form">
              <label htmlFor="boardName" className="board-name-label">Enter a board name</label>
              <input
                type="text"
                id="boardName"
                className="board-name-input"
                placeholder="e.g., My Trello board"
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)}
              />
              <button 
                className="next-button"
                onClick={handleNext}
                disabled={!boardName.trim()}
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
        <div className="board-setup-right">
          <div className="board-preview">
            <img
              src="https://images.ctfassets.net/rz1oowkt5gyp/5AB3lcAmWl5srytzAa4Bcg/cac29fd517067a1983fef1583284f0ed/chap3-onboardteam-caroussel-projectboard.png"
              alt="Board Preview"
              className="preview-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardSetup;
