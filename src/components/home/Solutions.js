import React from 'react';
import './Solutions.css';

const Solutions = () => {
  return (
    <section className="access-solutions">
      <div className="solutions-overlay"></div>
      <div className="solutions-container">
        <div className="solutions-header">
          <div className="title-with-indicators">
            <span className="indicator left"></span>
            <h2>Getting Access to our Learning Solutions</h2>
            <span className="indicator right"></span>
          </div>
          <h3>Everything we build has African learners unique challenges in mind!</h3>
        </div>
        
        <div className="solutions-cards">
          <div className="solution-card">
            <div className="solution-icon">
              <i className="fas fa-desktop"></i>
            </div>
            <h3>Offline Learning Management System</h3>
            <p>
              You don't have Fancy technologies or Reliable Internet at Home or School? 
              No worries our OFFLINE packages have all the content needed to make learning 
              interesting at your comfort.
            </p>
            <div className="learn-more-wrapper">
              <button className="learn-more">Learn more <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Online Learning Mobile App</h3>
            <p>
              Do you have all the fancy gadgets? Computers, Smartphones or Tablets with 
              cool access to the internet then get access anytime anywhere from our Web 
              Platform and Mobile App.
            </p>
            <div className="learn-more-wrapper">
              <button className="learn-more">Learn more <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions; 