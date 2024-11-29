import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      name: "Ministry of Education",
      logo: "/partners/ministry.png",
      category: "Government"
    },
    {
      name: "NECTA",
      logo: "/partners/necta.png",
      category: "Education"
    },
    {
      name: "TCU",
      logo: "/partners/tcu.png",
      category: "Education"
    },
    {
      name: "NACTE",
      logo: "/partners/nacte.png",
      category: "Education"
    }
  ];

  return (
    <section className="partners" id="partners">
      <div className="partners-container">
        <div className="partners-header">
          <h2>Our Partners</h2>
          <p>Working together with leading institutions to transform education</p>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img src={partner.logo} alt={partner.name} />
              <h3>{partner.name}</h3>
              <p>{partner.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 