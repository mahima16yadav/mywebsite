import React from 'react';
import './flow.css';

function Newsletter() {
  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-left">
          <div className="newsletter-logo">
            <span className="newsletter-logo-icon"></span>
            <span className="newsletter-logo-text">EZ Ambulance</span>
          </div>
          <div className="newsletter-content">
            <h3>Your Source for Green Energy Updates</h3>
            <p>
              Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized insights into the latest green energy solutions.
            </p>
            <div className="newsletter-signup">
              <input type="email" placeholder="Your e-mail..." />
              <button>Get in touch</button>
            </div>
          </div>
        </div>
        <div className="newsletter-links">
          <div className="newsletter-column">
            <h4>Platform</h4>
            <ul>
              <li>Solutions</li>
              <li>How it works</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="newsletter-column">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Our Mission</li>
              <li>Careers <span className="hiring-badge">HIRING</span></li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="newsletter-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
