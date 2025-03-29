import React from 'react';
import './styles.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Fitness Point</h1>
      <div className="about-content">
        <p>Welcome to Fitness Point, your premier destination for health and wellness. We are dedicated to helping you achieve your fitness goals through expert guidance, state-of-the-art facilities, and a supportive community.</p>
        
        <h2>Our Mission</h2>
        <p>To empower individuals to transform their lives through fitness, nutrition, and wellness education.</p>
        
        <h2>Our Vision</h2>
        <p>To be the leading fitness and wellness center, known for excellence in training, community engagement, and results-driven programs.</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expert trainers and staff</li>
          <li>Modern equipment and facilities</li>
          <li>Personalized training programs</li>
          <li>Nutrition guidance</li>
          <li>Supportive community environment</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
