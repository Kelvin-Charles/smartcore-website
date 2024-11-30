import React from 'react';
import './Reason.css';

const Reason = () => {
  return (
    <section className="reason-section">
      <div className="reason-container">
        <div className="reason-header">
          <div className="title-with-indicators">
            <span className="indicator left"></span>
            <h2>The Reason</h2>
            <span className="indicator right"></span>
          </div>
          <h3>Why we do all these?</h3>
        </div>
        
        <div className="reason-content">
          <div className="vertical-line"></div>
          <blockquote>
            <p>There are <strong>65 Million</strong> secondary school-aged children who are out of school 
            in Sub-Saharan Africa.</p>
            <p>Even for those who got a chance to get into school, 
            the quality of education is low and the dropout rate is extremely high.</p>
            <p>According to UNESCO data <em>"Out of 89% of students enrolled in primary 
            education only 9% actually make it to tertiary education and only 6% graduate."</em></p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Reason; 