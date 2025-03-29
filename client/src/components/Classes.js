import React from 'react';
import './styles.css';

const Classes = () => {
  return (
    <div className="classes-container">
      <h1>Our Classes</h1>
      <div className="classes-grid">
        <div className="class-card">
          <h2>Yoga</h2>
          <p className="class-time">Monday, Wednesday, Friday - 9:00 AM</p>
          <p className="class-duration">Duration: 60 minutes</p>
          <p className="class-description">Improve flexibility and find inner peace with our yoga classes.</p>
          <button className="btn">Book Now</button>
        </div>

        <div className="class-card">
          <h2>Zumba</h2>
          <p className="class-time">Tuesday, Thursday - 6:00 PM</p>
          <p className="class-duration">Duration: 45 minutes</p>
          <p className="class-description">Dance your way to fitness with our energetic Zumba sessions.</p>
          <button className="btn">Book Now</button>
        </div>

        <div className="class-card">
          <h2>HIIT</h2>
          <p className="class-time">Monday, Wednesday - 7:00 AM</p>
          <p className="class-duration">Duration: 30 minutes</p>
          <p className="class-description">High-intensity interval training for maximum calorie burn.</p>
          <button className="btn">Book Now</button>
        </div>

        <div className="class-card">
          <h2>Spinning</h2>
          <p className="class-time">Tuesday, Thursday, Saturday - 8:00 AM</p>
          <p className="class-duration">Duration: 45 minutes</p>
          <p className="class-description">Cardio-intensive cycling classes for endurance building.</p>
          <button className="btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Classes; 