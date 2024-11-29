import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-details">
            <div className="contact-item">
              <i className="far fa-envelope"></i>
              <span>info@smartcore.co.tz</span>
            </div>
            <span className="contact-divider">|</span>
            <div className="contact-item">
              <i className="far fa-clock"></i>
              <span>Mon - Sat: 8:00 am - 06.00pm</span>
            </div>
            <span className="contact-divider">|</span>
            <div className="contact-item">
              <i className="fas fa-location-dot"></i>
              <span>Market Street, Arusha, Tanzania</span>
            </div>
          </div>
          <button className="get-started-btn">
            Get Started <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-brand">
            <img src="/images/logo.png" alt="Smartcore Enterprise Limited" />
          </a>
          
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#solutions">Our Solutions</a>
            <a href="#people">People</a>
            <a href="#news">News & Updates</a>
            <a href="#contacts">Contact</a>
          </div>

          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          </div>

          <button 
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 