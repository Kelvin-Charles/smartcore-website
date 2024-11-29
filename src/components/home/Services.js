import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "For Students",
      description: "We provide relevant and interactive digital learning content for students in secondary schools in Sub-Saharan Africa.",
      buttonText: "Go to Kisomo!",
      icon: "👨‍🎓"
    },
    {
      title: "For Teachers/Schools",
      description: "You can teach using 2000+ videos available 100% offline to your students, monitor individual students progress & much more.",
      buttonText: "Get Started",
      icon: "👩‍🏫"
    },
    {
      title: "For Governments",
      description: "Education stakeholders and government get access to our realtime collected user behaviours data for decision making.",
      buttonText: "Request Details",
      icon: "🏛️"
    }
  ];

  return (
    <section className="services" id="solutions">
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-button">
                {service.buttonText}
                <span className="arrow-circle">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 