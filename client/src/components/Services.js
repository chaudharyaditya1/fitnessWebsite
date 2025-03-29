import React from 'react';
import './styles.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h2>Personal Training</h2>
          <p>One-on-one training sessions with expert trainers to help you achieve your fitness goals.</p>
          <ul>
            <li>Customized workout plans</li>
            <li>Progress tracking</li>
            <li>Nutrition guidance</li>
            <li>Flexible scheduling</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Group Classes</h2>
          <p>Join our energetic group classes led by experienced instructors.</p>
          <ul>
            <li>Yoga</li>
            <li>Zumba</li>
            <li>Spinning</li>
            <li>HIIT</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Nutrition Counseling</h2>
          <p>Professional nutrition guidance to complement your fitness journey.</p>
          <ul>
            <li>Diet planning</li>
            <li>Meal prep guidance</li>
            <li>Supplement advice</li>
            <li>Regular consultations</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Fitness Assessment</h2>
          <p>Comprehensive fitness evaluations to track your progress.</p>
          <ul>
            <li>Body composition analysis</li>
            <li>Strength testing</li>
            <li>Flexibility assessment</li>
            <li>Progress reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
