// client/src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import WorkoutTracker from './components/WorkoutTracker';
import Nutrition from './components/Nutrition';
import BMICalculator from './components/BMICalculator';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Services from './components/Services';
import Classes from './components/Classes';
import { AuthProvider } from './context/authcontext';
import ProtectedRoute from './components/protectedroute';

import ScrollReveal from 'scrollreveal';

function App() {
  // Initialize ScrollReveal animations
  useEffect(() => {
    const scrollRevealOption = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    };

    // Animate header content
    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    
    // Animate workout tracker
    ScrollReveal().reveal(".workout-tracker__header", scrollRevealOption);
    ScrollReveal().reveal(".workout-card", {
      ...scrollRevealOption,
      delay: 200,
      interval: 200,
    });
    
    // Animate nutrition section
    ScrollReveal().reveal(".nutrition__header", scrollRevealOption);
    ScrollReveal().reveal(".nutrition__card", {
      ...scrollRevealOption,
      delay: 200,
      interval: 200,
    });
    
    // Animate BMI calculator
    ScrollReveal().reveal(".bmi-calculator__header", scrollRevealOption);
    ScrollReveal().reveal(".bmi-calculator__form", {
      ...scrollRevealOption,
      delay: 400,
    });

  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/classes" element={<Classes />} />
            
            {/* Protected dashboard route */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <main>
                  <WorkoutTracker />
                  <Nutrition />
                  <BMICalculator />
                </main>
              </ProtectedRoute>
            } />

            {/* Home route */}
            <Route path="/" element={
              <main>
                <WorkoutTracker />
                <Nutrition />
                <BMICalculator />
              </main>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
