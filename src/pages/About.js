import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  const facts = [
    {
      number: "7+",
      label: "Years in Services"
    },
    {
      number: "21400+",
      label: "Seconds of Content"
    },
    {
      number: "523159",
      label: "Users Reached"
    },
    {
      number: "2000+",
      label: "Video Library"
    }
  ];

  return (
    <div className="about-page">
      <div className="page-hero">
        <h1>About Us</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>

      <section className="impact-section">
        <div className="container">
          <div className="impact-content">
            <div className="heading-with-line">
              <h2 className="impact-heading">
                Well, to put it bluntly,<br />
                We are just a bunch of<br />
                tech nerds who love teaching!
              </h2>
            </div>
            <p>
              Based in Arusha, Tanzania and Hong Kong, China we are a digital learning company, 
              making quality & relevant secondary and vocational education accessible to all youth in Africa by 
              leveraging the power of Technology and Data. Our solutions use modern technologies such as 
              AI, VR, Big Data Analytics & Machine Learning to provide the best learning experience 
              to students in secondary schools in Sub-Saharan Africa, offering real-time digital education data 
              to education stakeholders while lowering the cost and time spent in setting up e-Learning infrastructure 
              by offering off the shelf, tested and individually customized e-Learning solutions.
            </p>
          </div>
          <div className="impact-image">
            <img 
              src="https://smartcore.co.tz/wp-content/uploads/2024/02/Smartcore-7-Years-of-Impact.png" 
              alt="7 Years of Impact" 
            />
          </div>
        </div>
      </section>

      <section className="know-more-section">
        <div className="container">
          <div className="ct-cta1">
            <div className="item--holder">
              <span className="item--title">Want to know more about us?</span>
              <span className="item--desc"></span>
            </div>
            <div className="item--button">
              <a className="btn btn-white" href="#">
                <i className="fas fa-cloud-download-alt"></i>
                Download Full Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <div className="vision">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2>Our Vision</h2>
              <p>To help 10 Million learners in and out of schools to use technology to improve and transform their learning journey.</p>
            </div>
            <div className="mission">
              <div className="card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2>Our Mission</h2>
              <p>Making learning fun, engaging and accessible to all youth in Sub-Saharan Africa and beyond.</p>
            </div>
            <div className="quote-box">
              <blockquote>
                "Do not confine your children to your own learning, for they were born in another time."
              </blockquote>
              <cite>Chinese Proverb</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-section">
        <div className="container">
          <div className="facts-content">
            <div className="facts-title">
              <h2>Check These Incredible True Short<br />Facts About Smartcore</h2>
              <div className="video-pulse">
                <i className="fas fa-play-circle"></i>
              </div>
            </div>
            <div className="facts-grid">
              {facts.map((fact, index) => (
                <div className="fact-card" key={index}>
                  <h3>{fact.number}</h3>
                  <p>{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 