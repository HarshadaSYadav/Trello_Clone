import React from 'react';
import './IntegrationSection.css';

const IntegrationSection = () => {
  return (
    <section className="integration-section">
      <div className="integration-container">
        <div className="integration-cards">
          <div className="integration-card">
            <div className="card-content">
              <div className="card-details">
                <div className="card-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                    alt="Email icon"
                    className="icon-image"
                  />
                </div>
                <h3 className="card-title">
                  Email Magic
                  <span className="coming-soon">Coming soon</span>
                </h3>
                <p className="card-description">
                  Easily turn your emails into to-dos! Just forward them to your Trello Inbox, and they'll be transformed by Atlassian Intelligence (AI) into organized to-dos with all the links you need.
                </p>
              </div>
              <div className="card-image">
                <img
                  src="https://images.ctfassets.net/rz1oowkt5gyp/41FUDezD7CMeIPgKXZxe9v/76e33f6a4343d48aab342b5f67061baf/Gmail_Animation_24.gif"
                  alt="Email integration"
                />
              </div>
            </div>
          </div>

          <div className="integration-card">
            <div className="card-content">
              <div className="card-details">
                <div className="card-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968890.png"
                    alt="Slack icon"
                    className="icon-image"
                  />
                </div>
                <h3 className="card-title">
                  Slack Sorcery
                  <span className="coming-soon">Coming soon</span>
                </h3>
                <p className="card-description">
                  Need to follow up on a Slack message? Send it directly to your Trello board! Slack's interface lets you save messages that appear in your Trello Inbox with AI-generated summaries and links.
                </p>
              </div>
              <div className="card-image">
                <img
                  src="https://images.ctfassets.net/rz1oowkt5gyp/4tBMY9wZI1y5Jb0nsb3jVd/bc96c1c93da9b97a54a0b4bda6eee1a7/TrelloSlackIntegration.gif"
                  alt="Slack integration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;