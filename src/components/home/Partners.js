import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      name: "UDOM",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2020/12/udomlogo.png",
      websiteUrl: "https://udom.ac.tz/"
    },
    {
      name: "Vodacom",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2020/12/vodaa.png",
      websiteUrl: "https://vodacom.co.tz/"
    },
    {
      name: "IAE",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2020/12/iae.png",
      websiteUrl: "https://iae.ac.tz/"
    },
    {
      name: "USADF",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2023/03/USADFOfficial.png",
      websiteUrl: "https://usadf.gov/"
    },
    {
      name: "UNCDF",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2023/03/UNCDF-Official.png",
      websiteUrl: "https://www.uncdf.org/"
    },
    {
      name: "UNDP",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2023/03/UNDPOfficial.png",
      websiteUrl: "https://www.undp.org/tanzania"
    },
    {
      name: "Mzumbe",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2023/03/MzumbeSmartcore.png",
      websiteUrl: "https://mzumbe.ac.tz/"
    },
    {
      name: "SEGAL",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2021/03/segallogo.jpg",
      websiteUrl: "https://www.segalfamilyfoundation.org/"
    },
    {
      name: "Westerwele",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2023/03/WesterweleSmartcore.png",
      websiteUrl: "https://westerwelle-foundation.com/"
    },
    {
      name: "AU",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2023/03/AUSmartcore1.png",
      websiteUrl: "https://au.int/"
    },
    {
      name: "Goocity",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2020/12/goocity.png",
      websiteUrl: "https://goodcityfoundation.org/"
    },
    {
      name: "ADN",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2023/03/ADNSmartcore.png",
      websiteUrl: "https://africandiasporanetwork.org/"
    },
    {
      name: "DOT",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2020/12/dot.png",
      websiteUrl: "https://www.dotrust.org/"
    },
    {
      name: "TICD",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2023/03/TICD-Smartcore.png",
      websiteUrl: "https://ticd.ac.tz/"
    },
    {
      name: "Don Bosco",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2023/03/donboscosmartcore.png",
      websiteUrl: "https://donboscottcdom.ac.tz/"
    },
    {
      name: "Shona",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2020/12/shona.png",
      websiteUrl: "https://shona.co/"
    },
    {
      name: "OBU",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2020/12/obu.png",
      websiteUrl: "https://sido.go.tz/"
    },
    {
      name: "Anza",
      imageUrl: "https://smartcore.co.tz/wp-content/uploads/2020/12/anza.png",
      websiteUrl: "https://anzaentrepreneurs.co.tz/"
    }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <div className="title-with-indicators">
            <span className="indicator left"></span>
            <h2>Strong Together</h2>
            <span className="indicator right"></span>
          </div>
          <h3>Partners & Supporters</h3>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                <img src={partner.imageUrl} alt={partner.name} />
              </a>
            </div>
          ))}
        </div>

        <div className="partners-bottom-text">
          <div className="title-with-indicators">
            <span className="indicator left"></span>
            <h4>Interested in joining forces?</h4>
            <span className="indicator right"></span>
          </div>
          <div className="bottom-text-content">
            <i className="dot-shape">
              <div className="dot-row first">
                <i className="black"></i>
                <i></i>
                <i className="black"></i>
              </div>
              <div className="dot-row second">
                <i className="black"></i>
                <i className="black"></i>
              </div>
              <div className="dot-row third">
                <i className="black"></i>
              </div>
            </i>
            <p>We believe the challenge we are addressing needs all hands on deck.</p>
          </div>
        </div>

        <div className="partners-cta">
          <button className="become-partner">
            <i className="fas fa-handshake"></i>
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners; 