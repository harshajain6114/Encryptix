import React from 'react';
import './HeroSection.css';
import heroImage from '/home/harsha/Desktop/techlandingpage/src/images/hero-image.jpg'; // replace with your hero image

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Our Tech World</h1>
        <p>Experience the future of web development</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
