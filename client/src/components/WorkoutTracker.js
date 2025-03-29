import React, { useState, useEffect } from 'react';

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch workouts from the backend
    fetch('http://localhost:5000/api/workouts')
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching workouts:', err);
        setLoading(false);
      });
  }, []);

  // Enhanced workout data with additional information
  const enhancedWorkouts = [
    { 
      id: 1, 
      name: "Strength Training", 
      description: "Full body strength workout focusing on major muscle groups",
      duration: "45 min",
      difficulty: "Intermediate",
      calories: 320
    },
    { 
      id: 2, 
      name: "Cardio Blast", 
      description: "High-intensity cardio intervals to improve stamina",
      duration: "30 min",
      difficulty: "Advanced",
      calories: 380
    },
    { 
      id: 3, 
      name: "Yoga Flow", 
      description: "Gentle flow sequence with focus on flexibility and balance",
      duration: "60 min",
      difficulty: "Beginner",
      calories: 200
    },
    { 
      id: 4, 
      name: "HIIT Circuit", 
      description: "Quick but intense circuit training for maximum results",
      duration: "25 min",
      difficulty: "Advanced",
      calories: 300
    }
  ];

  return (
    <section className="workout-tracker" id="workout">
      <div className="workout-tracker__container">
        <div className="workout-tracker__header">
          <h2>Track Your Workouts</h2>
          <p>Stay consistent with your fitness journey by tracking your progress</p>
        </div>
        
        <div className="workout-tracker__grid">
          {enhancedWorkouts.map((workout) => (
            <div className="workout-card" key={workout.id}>
              <h3>{workout.name}</h3>
              <p>{workout.description}</p>
              <div className="workout-card__stats">
                <div className="workout-card__stat">
                  <span>{workout.duration}</span>
                  <small>Duration</small>
                </div>
                <div className="workout-card__stat">
                  <span>{workout.difficulty}</span>
                  <small>Level</small>
                </div>
                <div className="workout-card__stat">
                  <span>{workout.calories}</span>
                  <small>Calories</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {loading ? (
          <p>Loading workouts...</p>
        ) : (
          <div className="workout-tracker__api-data">
            <h3>Your Personal Workouts</h3>
            <ul>
              {workouts.map((workout) => (
                <li key={workout.id}>
                  {workout.name} - {workout.reps} reps
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutTracker; 