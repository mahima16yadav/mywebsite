import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-section">
      <h1>Pricing</h1>
      <p>Our pricing plans are simple and designed to cater to households and companies of various<br/>
      sizes. Choose a plan that suits your needs and budget.</p>
      <div className="pricing-cards">
        {['Basic', 'Basic', 'Basic', 'Basic'].map((plan, index) => (
          <div key={index} className={`card ${index === 2 ? 'enterprise' : ''}`}>
            <h2>Basic</h2>
            <h3>$59 <span>per month</span></h3>
            <p>For small households or businesses with moderate energy consumption</p>
            <button className="cta-btn">
              Get started <span className="arrow">→</span>
            </button>
            <div className="features">
              <p><span className="tick">✔</span> Fixed amount of renewable energy supply</p>
              <p><span className="tick">✔</span> Installation support for chosen energy type</p>
              <p><span className="tick">✔</span> Basic customer support included</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
