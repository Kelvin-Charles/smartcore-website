import React from 'react';
import './News.css';

const News = () => {
  const newsItems = [
    {
      title: "Join Smartcore Team! Customer Service Personnel – Women Only Position",
      date: "August 7, 2024",
      author: "smartcore",
      image: "https://smartcore.co.tz/wp-content/uploads/2020/12/Smartcore-team.jpg"
    },
    {
      title: "5 Strategies for Integrating Accessible Technologies in African Education",
      date: "June 9, 2023",
      author: "smartcore",
      image: "https://smartcore.co.tz/wp-content/uploads/2020/12/analytics.jpg"
    },
    {
      title: "The Power of Analytics: How Smartcore Helps You Make Data-Driven Decisions in Education",
      date: "April 15, 2023",
      author: "smartcore",
      image: "https://smartcore.co.tz/wp-content/uploads/2020/12/users-kisomo.jpg"
    },
    {
      title: "The Impact of Technology on Your Child's Education: Why It's Time to Embrace It!",
      date: "January 25, 2023",
      author: "smartcore",
      image: "https://smartcore.co.tz/wp-content/uploads/2020/12/Smartcore-Enterprise-Limited-Quality-Education.jpg"
    },
    {
      title: "Digital Skills for Tanzania's Youth: A Guide to Navigating the Digital Landscape",
      date: "January 22, 2023",
      author: "smartcore",
      image: "https://smartcore.co.tz/wp-content/uploads/2020/12/userskisomoapp2020.jpg"
    },
    {
      title: "The Facts about Technology in Education: Separating Reality from Hype in Africa",
      date: "January 19, 2023",
      author: "smartcore",
      image: "https://smartcore.co.tz/wp-content/uploads/2020/12/smartcoreudom.jpg"
    }
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-header">
          <div className="title-with-indicators">
            <span className="indicator left"></span>
            <h2>Let's Share</h2>
            <span className="indicator right"></span>
          </div>
          <h3>News & Updates</h3>
        </div>
        
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div className="news-card" key={index}>
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="news-meta">
                  <span className="news-date">{item.date}</span>
                  <span className="news-author">{item.author}</span>
                </div>
              </div>
              <div className="news-content">
                <h4>{item.title}</h4>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News; 