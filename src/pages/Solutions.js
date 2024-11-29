import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: "School Management System",
      description: "A comprehensive solution for managing academic and administrative operations efficiently.",
      features: [
        "Student Information Management",
        "Academic Records",
        "Financial Management",
        "Attendance Tracking",
        "Report Generation"
      ],
      image: "/images/solutions/school-management.jpg"
    },
    {
      title: "E-Learning Platform",
      description: "Digital learning platform supporting both online and offline education.",
      features: [
        "Interactive Learning Materials",
        "Virtual Classrooms",
        "Progress Tracking",
        "Offline Access",
        "Assessment Tools"
      ],
      image: "/images/solutions/elearning.jpg"
    },
    // Add more solutions
  ];

  return (
    <div className="solutions-page">
      <div className="page-hero">
        <h1>Our Solutions</h1>
        <p>Innovative Digital Solutions for Modern Education</p>
      </div>

      <section className="solutions-section">
        <div className="container">
          {solutions.map((solution, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-image">
                <img src={solution.image} alt={solution.title} />
              </div>
              <div className="solution-content">
                <h2>{solution.title}</h2>
                <p>{solution.description}</p>
                <h3>Key Features</h3>
                <ul>
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="learn-more">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions; 