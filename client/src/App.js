// client/src/App.js
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    const scrollRevealOption = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    };

    // Example: Reveal header images and content
    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    // Add more ScrollReveal calls as needed
  }, []);

  return (
    <div className="App">
      {/* Render your custom Header */}
      <Header />
      {/* You can add other components or content below */}
      <main>
        <h1>Welcome to Fitness Point</h1>
        {/* Your other page content goes here */}
      </main>
    </div>
  );
}

export default App;
