import React, { useState, useEffect } from 'react';
import './Highlights.css';

const Highlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      title: "Cutting-Edge Technology",
      description: "Stay ahead with the latest in tech.",
    },
    {
      title: "Expert Team",
      description: "Work with the best in the industry.",
    },
    {
      title: "Innovative Solutions",
      description: "Creative and effective web solutions.",
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority.",
    },
    {
      title: "24/7 Support",
      description: "We are here to help you anytime.",
    },
    {
      title: "Affordable Pricing",
      description: "Get the best services at the best prices.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [cards.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="highlights">
      <h2>What We Offer</h2>
      <div className="highlight-cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === activeIndex ? 'active' : ''}`}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation-dots">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;







