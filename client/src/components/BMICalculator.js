import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    
    if (!height || !weight) return;
    
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    
    // Calculate BMI: weight (kg) / (height (m) * height (m))
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBMI(bmiValue);
    
    // Determine BMI category
    if (bmiValue < 18.5) {
      setBMICategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBMICategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBMICategory('Overweight');
    } else {
      setBMICategory('Obesity');
    }
  };

  return (
    <section className="bmi-calculator" id="bmi-calculator">
      <div className="bmi-calculator__container">
        <div className="bmi-calculator__header">
          <h2>BMI Calculator</h2>
          <p>Calculate your Body Mass Index to check if your weight is healthy</p>
        </div>
        
        <form className="bmi-calculator__form" onSubmit={calculateBMI}>
          <div className="bmi-calculator__form-group">
            <label htmlFor="height">Height (cm)</label>
            <input 
              type="number" 
              id="height" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height" 
              required 
            />
          </div>
          
          <div className="bmi-calculator__form-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input 
              type="number" 
              id="weight" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight" 
              required 
            />
          </div>
          
          <div className="bmi-calculator__form-group">
            <button type="submit" className="btn">Calculate BMI</button>
          </div>
          
          {bmi && (
            <div className="bmi-calculator__result">
              <p>Your BMI is:</p>
              <div className="bmi-calculator__result-value">{bmi}</div>
              <p>Category: <strong>{bmiCategory}</strong></p>
              <p className="bmi-calculator__result-info">
                A healthy BMI ranges from 18.5 to 24.9
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default BMICalculator; 