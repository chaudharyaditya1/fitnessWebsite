import React from 'react';

const Nutrition = () => {
  const nutritionPlans = [
    {
      id: 1,
      title: "Protein-Rich Diet",
      description: "High protein meals designed to support muscle growth and recovery after intense workouts.",
      tags: ["High Protein", "Muscle Building", "Recovery"]
    },
    {
      id: 2,
      title: "Fat Loss Nutrition",
      description: "Balanced macronutrient plan focused on supporting fat loss while maintaining muscle mass.",
      tags: ["Fat Loss", "Calorie Deficit", "Lean Protein"]
    },
    {
      id: 3,
      title: "Vegan Athlete",
      description: "Plant-based nutrition plan providing all essential nutrients for optimal athletic performance.",
      tags: ["Vegan", "Plant Protein", "Nutrient Dense"]
    },
    {
      id: 4,
      title: "Pre/Post Workout",
      description: "Targeted nutrition timing to maximize energy during workouts and enhance recovery afterward.",
      tags: ["Timing", "Performance", "Recovery"]
    }
  ];

  return (
    <section className="nutrition" id="nutrition">
      <div className="nutrition__container">
        <div className="nutrition__header">
          <h2>Nutrition Plans</h2>
          <p>Fuel your body with the right nutrients to achieve your fitness goals</p>
        </div>

        <div className="nutrition__grid">
          {nutritionPlans.map((plan) => (
            <div className="nutrition__card" key={plan.id}>
              <div className="nutrition__card-content">
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="nutrition__card-tags">
                  {plan.tags.map((tag, index) => (
                    <span className="nutrition__tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nutrition; 