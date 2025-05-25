import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dashboard.css';
import { FiSearch, FiBell, FiHelpCircle, FiPlus, FiStar, FiMoreHorizontal } from 'react-icons/fi';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [boards, setBoards] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch user email and boards on component mount
  useEffect(() => {
    const email = localStorage.getItem('userEmail') || 'sample@example.com';
    setUserEmail(email);

    const fetchBoards = async () => {
      try {
        const response = await fetch('https://trello-clone-rc7n.vercel.app/api/boards', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBoards(data.boards); // Set boards fetched from the backend
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error fetching boards:', error);
        alert('An error occurred while fetching boards. Please try again.');
      }
    };

    fetchBoards();
  }, []);

  // Function to extract initials from email
  const getUserInitials = (email) => {
    if (!email) return 'U'; // Default to 'U' if no email is available
    const parts = email.split('@')[0].split('.');
    return parts.map((part) => part[0].toUpperCase()).join('');
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('token');
    navigate('/'); // Redirect to the main page
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <button className="menu-button">
            <span className="menu-icon">≡</span>
          </button>
          <img
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
            alt="Trello"
            className="dashboard-logo"
          />
          <div className="header-nav">
            <button className="nav-item">Workspaces</button>
            <button className="nav-item">Recent</button>
            <button className="nav-item">Starred</button>
            <button className="nav-item">Templates</button>
            <button className="create-button">Create</button>
          </div>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <button className="icon-button">
            <FiBell />
          </button>
          <button className="icon-button">
            <FiHelpCircle />
          </button>
          <div
            className="user-avatar"
            onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
            style={{ cursor: 'pointer' }}
          >
            {getUserInitials(userEmail)}
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <p className="dropdown-item">{userEmail}</p> {/* Display email */}
              <button className="dropdown-item logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="dashboard-sidebar">
        <div className="workspace-header">
          <div className="workspace-icon">T</div>
          <div className="workspace-info">
            <h2>Trello Workspace</h2>
            <span className="workspace-type">Premium</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item active">
              <span className="nav-icon">◫</span>
              Boards
            </li>
            <li className="nav-item">
              <span className="nav-icon">👥</span>
              Members
              <button className="add-button"><FiPlus /></button>
            </li>
            <li className="nav-item">
              <span className="nav-icon">⚙️</span>
              Workspace settings
            </li>
          </ul>

          <div className="workspace-views">
            <h3>PREMIUM</h3>
            <ul>
              <li className="nav-item">
                <span className="nav-icon">📊</span>
                Table
              </li>
              <li className="nav-item">
                <span className="nav-icon">📅</span>
                Calendar
              </li>
            </ul>
          </div>

          <div className="your-boards">
            <h3>Your boards</h3>
            <ul>
              {boards.length > 0 ? (
                boards.map((board) => (
                  <li className="board-item" key={board.id}>
                    <div className="board-color"></div>
                    <span>{board.name}</span>
                  </li>
                ))
              ) : (
                <li>No boards found</li>
              )}
            </ul>
          </div>
        </nav>
      </div>

      <main className="dashboard-main">
        <div className="board-header">
          <div className="board-title">
            <h1>{boards.length > 0 ? boards[0].name : 'No boards available'}</h1> {/* Display the first board name */}
            <button className="star-button"><FiStar /></button>
          </div>
          <div className="board-actions">
            <button className="view-button">
              <span className="view-icon">◫</span>
              Board
            </button>
            <button className="view-button">
              <span className="view-icon">≡</span>
              Table
            </button>
            <button className="filters-button">
              <FiPlus /> Filters
            </button>
            <button className="share-button">Share</button>
            <button className="more-button">
              <FiMoreHorizontal />
            </button>
          </div>
        </div>

        <div className="board-content">
          <div className="list">
            <div className="list-header">
              <h3>To do</h3>
              <button className="more-button"><FiMoreHorizontal /></button>
            </div>
            <div className="list-cards">
              <div className="card">
                <h4>Project planning</h4>
              </div>
              <div className="card">
                <h4>Kickoff meeting</h4>
              </div>
              <button className="add-card-button">
                <FiPlus /> Add a card
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
