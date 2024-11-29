import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">Who are we?</h2>
        
        <div className="about-flex-container">
          <div className="about-left">
            <div className="about-image">
              <img src="https://smartcore.co.tz/wp-content/uploads/2020/12/Smartcore-team.jpg" alt="Smartcore Team" />
              <div className="learners-overlay">
                <i className="fas fa-users"></i>
                <div className="learners-count">
                  <h4>523,159 +</h4>
                  <p>Learners Impacted</p>
                </div>
              </div>
            </div>
            <h3 className="golden-years">Golden years, Half a Million Plus Learners!</h3>
          </div>

          <div className="about-right">
            <div className="about-content">
              <h3>Well, to put it bluntly, We are just a bunch of technology nerds who love teaching!</h3>
              <p>
                Based in Arusha, Tanzania and Hong Kong, China we are a digital learning company, 
                making <em>quality & relevant secondary & vocational education accessible to youth 
                in Africa and beyond</em> by leveraging the power of Technology and Data. Our solutions 
                use modern technologies such as <strong>AI, VR, Big Data Analytics & Machine Learning</strong> to 
                provide the best learning experience to students in secondary schools in Sub-Saharan 
                Africa, offering real-time digital education data to education stakeholders while 
                lowering the cost and time spent in setting up e-Learning infrastructure by offering 
                off the shelf, tested and individually customized e-Learning solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 