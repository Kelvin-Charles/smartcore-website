import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const slides = [
    {
      image: 'https://smartcore.co.tz/wp-content/uploads/2020/12/users-kisomo.jpg',
      title: "Learn How We are digitizing Africa Education System",
      titleHighlight: "by unleashing the power of Technology and Data",
      subtitle: "We provide a chance to",
      subtitleHighlight: "Quality Education for all.",
      description: "Join the movement Easily Learn Offline or Online",
      subtext: "Using modern technologies such as AI, VR, Big Data Analytics & Machine Learning. We provide a supportive environment to learn"
    },
    {
      image: 'https://smartcore.co.tz/wp-content/uploads/2020/12/Smartcore-team.jpg',
      title: "Empowering African Youth",
      titleHighlight: "Through Digital Education",
      subtitle: "Making quality education",
      subtitleHighlight: "accessible to every student",
      description: "in Sub-Saharan Africa",
      subtext: "Our solutions are designed to work both online and offline, ensuring no student is left behind"
    },
    {
      image: 'https://smartcore.co.tz/wp-content/uploads/2020/12/userskisomoapp2020.jpg',
      title: "Transforming Education Through Technology",
      subtitle: "2000+ Educational Videos Available 100% Offline",
      description: "Access quality educational content anytime, anywhere - with or without internet"
    },
    {
      image: 'https://smartcore.co.tz/wp-content/uploads/2020/12/smartcoreudom.jpg',
      title: "Data-Driven Education Solutions",
      subtitle: "Real-time analytics and insights for better learning outcomes",
      description: "Helping educators make informed decisions with advanced analytics and monitoring tools"
    },
    {
      image: 'https://smartcore.co.tz/wp-content/uploads/2020/12/Smartcore-Enterprise-Limited-Quality-Education.jpg',
      title: "Building The Future of African Education",
      subtitle: "Innovative solutions for modern learning challenges",
      description: "Combining technology and education to create lasting impact across Africa"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.image})`
          }}
        />
      ))}
      <div className="hero-content">
        <h1>
          {slides[currentImageIndex].title} <br />
          <span className="highlight">{slides[currentImageIndex].titleHighlight}</span>
        </h1>
        <div className="hero-subtitle">
          <p>
            {slides[currentImageIndex].subtitle} <br />
            <span className="highlight">{slides[currentImageIndex].subtitleHighlight}</span>
          </p>
          <p className="description">{slides[currentImageIndex].description}</p>
        </div>
        <div className="hero-buttons">
          <button className="primary-button">Reachout Now</button>
        </div>
        <p className="hero-subtext">{slides[currentImageIndex].subtext}</p>
      </div>
    </section>
  );
};

export default Hero; 