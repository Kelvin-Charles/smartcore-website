import React from 'react';
import './News.css';

const News = () => {
  const newsItems = [
    {
      title: "Smartcore Launches New E-Learning Platform",
      date: "June 15, 2023",
      image: "/news/elearning.jpg",
      excerpt: "Revolutionizing digital education with our latest platform release..."
    },
    {
      title: "Partnership with Ministry of Education",
      date: "May 28, 2023",
      image: "/news/partnership.jpg",
      excerpt: "Strategic partnership to enhance digital education across Tanzania..."
    },
    {
      title: "Digital Library Initiative Success",
      date: "May 10, 2023",
      image: "/news/library.jpg",
      excerpt: "Over 10,000 students now have access to digital learning resources..."
    }
  ];

  return (
    <section className="news" id="news">
      <div className="news-container">
        <div className="news-header">
          <h2>Latest News & Updates</h2>
          <p>Stay informed about our latest developments and initiatives</p>
        </div>
        
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div className="news-card" key={index}>
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="news-date">{item.date}</span>
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News; 