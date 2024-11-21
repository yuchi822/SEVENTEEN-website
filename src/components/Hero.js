import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
