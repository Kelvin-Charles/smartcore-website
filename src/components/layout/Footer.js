import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>We are <span className="highlight">Smartcore</span></h3>
            <p>We are digitizing Africa Education system using technologies and real-time data.</p>
             <div className="footer-hours">
            <h3>Open Hours:</h3>
            <p>Mon – Sat: 8 am – 6 pm,<br />Sunday & Public Holidays: CLOSED</p>
          </div>
          </div>

          <div className="footer-contact">
            <h3>Official info:</h3>
            <p>Market Street, Mega Complex Building 6th Floor<br />Arusha Tanzania</p>
            <p>+255 769 743064</p>
            <p>info@smartcore.co.tz<br />hello@smartcore.co.tz</p>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe our newsletter to get our latest update & news</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2024 © Smartcore Enterprise – All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 