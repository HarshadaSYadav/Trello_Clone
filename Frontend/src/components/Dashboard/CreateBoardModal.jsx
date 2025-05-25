import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './CreateBoardModal.css';

const CreateBoardModal = ({ onClose, onCreateBoard }) => {
  const [boardTitle, setBoardTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState('#0079BF');

  const backgroundColors = [
    '#0079BF',
    '#D29034',
    '#519839',
    '#B04632',
    '#89609E',
    '#CD5A91',
    '#4BBF6B',
    '#00C2E0'
  ];

  const handleCreate = () => {
    if (boardTitle.trim()) {
      onCreateBoard({
        title: boardTitle,
        backgroundColor: selectedColor
      });
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="create-board-modal">
        <div className="modal-header">
          <h2>Create board</h2>
          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="modal-content">
          <div className="background-section">
            <h3>Background</h3>
            <div className="color-options">
              {backgroundColors.map(color => (
                <button
                  key={color}
                  className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div className="board-title-section">
            <label htmlFor="boardTitle">
              Board title <span className="required">*</span>
            </label>
            <input
              id="boardTitle"
              type="text"
              value={boardTitle}
              onChange={(e) => setBoardTitle(e.target.value)}
              placeholder="Enter board title"
              autoFocus
            />
          </div>

          <button
            className="create-button"
            onClick={handleCreate}
            disabled={!boardTitle.trim()}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBoardModal;