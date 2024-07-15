import React, { useState } from 'react';
import "./getintouch.css";
function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', {
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message,
    });
  };

  return (
    <div className="container">
      <h1>Get in Touch</h1>
      <p>We are here to help you make a first move to greener choice.</p>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
        <ul>
          <li>
            <i className="fas fa-phone-alt"></i> +1012 3456 789
          </li>
          <li>
            <i className="fas fa-envelope"></i> demo@gmail.com
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i> 132 Dartmouth Street Boston,
            Massachusetts 02156 United States
          </li>
        </ul>
        <div className="social-media">
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-facebook-f"></a>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              maxLength="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              maxLength="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              maxLength="10"
              pattern="[0-9]{10}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Select Subject</label>
            <div className="radio-group">
              <label htmlFor="generalInquiry">
                <input
                  type="radio"
                  id="generalInquiry"
                  name="subject"
                  value="General Inquiry"
                  checked={subject === 'General Inquiry'}
                  onChange={(event) => setSubject(event.target.value)}
                />
                General Inquiry
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              maxLength="300"
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
