import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <h1>About Us</h1>
        <p>Leading Digital Education Transformation in Africa</p>
      </div>

      <section className="about-section">
        <div className="container">
          <div className="mission-vision">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>To transform education through innovative digital solutions, making quality education accessible to all across Africa.</p>
            </div>
            <div className="vision">
              <h2>Our Vision</h2>
              <p>To be the leading educational technology provider in Africa, empowering institutions and learners with cutting-edge digital solutions.</p>
            </div>
          </div>

          <div className="values">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>Continuously developing creative solutions to educational challenges</p>
              </div>
              <div className="value-card">
                <h3>Excellence</h3>
                <p>Maintaining the highest standards in all our services</p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>Operating with honesty and transparency in all interactions</p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>Working together with stakeholders to achieve shared goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            {/* Add team members here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 