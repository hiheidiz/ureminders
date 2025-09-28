import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">ureminders</h3>
              <p className="footer-description">
                Smart task reminders powered by AI and location intelligence. 
                Never miss important tasks again.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-title">Product</h4>
                <ul className="footer-list">
                  <li><a href="#features" className="footer-link">Features</a></li>
                  <li><a href="#how-it-works" className="footer-link">How it Works</a></li>
                  <li><a href="#download" className="footer-link">Download</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Support</h4>
                <ul className="footer-list">
                  <li><a href="#help" className="footer-link">Help Center</a></li>
                  <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#terms" className="footer-link">Terms of Service</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Connect</h4>
                <ul className="footer-list">
                  <li><a href="#contact" className="footer-link">Contact Us</a></li>
                  <li><a href="#twitter" className="footer-link">Twitter</a></li>
                  <li><a href="#instagram" className="footer-link">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; 2024 ureminders. All rights reserved.</p>
            </div>
            
            <div className="footer-social">
              <a href="#snapchat" className="social-link" aria-label="Snapchat">
                <span className="social-icon">👻</span>
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
            </div>
          </div>
        </div>
        
        <div id="download" className="download-section">
          <div className="download-content">
            <h3>Ready to get started?</h3>
            <p>Try ureminders on Snapchat today and experience smarter task management.</p>
            <div className="download-buttons">
              <a href="#snapchat" className="btn btn-primary download-btn">
                <span className="btn-icon">👻</span>
                Open in Snapchat
              </a>
              <a href="#learn-more" className="btn download-btn">
                Learn More
              </a>
            </div>
            <div className="download-note">
              <p>Available as a Snapchat Lens • No app download required</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


