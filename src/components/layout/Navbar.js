import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

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
          <Link to="/" className="navbar-brand">
            <img src="/images/logo.png" alt="Smartcore Enterprise Limited" />
          </Link>
          
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/solutions">Our Solutions</Link>
            <Link to="/people">People</Link>
            <Link to="/news">News & Updates</Link>
            <Link to="/contacts">Contact</Link>
          </div>

          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          </div>

          <button 
            className={`mobile-menu-button ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
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