import React from 'react';
import './contact.css';

function ContactUs() {
  return (
    <div className="contact-us-section">
    <div classname="heading">
      <h1>Contact us</h1>
      <p>We are here to help you make a first move to greener choice.</p>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <img src="./email.jpeg" alt="Email Icon" className="contact-icon" />
          <h2>Email</h2>
          <p>We will reply within 2 working days</p>
          <p className="contact-detail">hello@flow.com</p>
        </div>
        <div className="contact-item">
          <img src="./call.png" alt="Phone Icon" className="contact-icon" />
          <h2>Phone</h2>
          <p>We are available Monday-Friday from 8 AM until 5 PM</p>
          <p className="contact-detail">(239) 555-0108</p>
        </div>
        <div className="contact-item">
          <img src="./loc.jpeg" alt="HQ Office Icon" className="contact-icon" />
          <h2>HQ Office</h2>
          <p>Visit us in our office</p>
          <p className="contact-detail">3891 Ranchview Dr. Richardson, California 62639</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
