// server/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Workout = require('./src/models/workoutModel');
const Nutrition = require('./src/models/nutritionModel');
const connectDB = require('./config/db');

dotenv.config();

// Connect to MongoDB
connectDB();

// Sample workout data
const workouts = [
  {
    name: 'Push Ups',
    description: 'Basic upper body exercise targeting chest, shoulders, and triceps',
    category: 'Strength',
    reps: 10,
    sets: 3,
    difficulty: 'Beginner',
    calories: 100
  },
  {
    name: 'Squats',
    description: 'Lower body compound exercise working quads, hamstrings, and glutes',
    category: 'Strength',
    reps: 15,
    sets: 4,
    difficulty: 'Intermediate',
    calories: 150
  },
  // Add more sample workouts...
];

// Sample nutrition data
const nutritionPlans = [
  {
    title: 'Protein-Rich Diet',
    description: 'High protein meals designed to support muscle growth and recovery after intense workouts.',
    tags: ['High Protein', 'Muscle Building', 'Recovery'],
    details: {
      calories: 2500,
      macros: {
        protein: '40%',
        carbs: '40%',
        fats: '20%'
      },
      meals: [
        'Breakfast: Protein oatmeal with fruits',
        'Snack: Greek yogurt with nuts',
        'Lunch: Grilled chicken with quinoa and vegetables',
        'Snack: Protein shake with banana',
        'Dinner: Salmon with sweet potato and broccoli'
      ]
    }
  },
  // Add more sample nutrition plans...
];

// Import data function
const importData = async () => {
  try {
    // Clear existing data
    await Workout.deleteMany();
    await Nutrition.deleteMany();

    // Import new data
    await Workout.insertMany(workouts);
    await Nutrition.insertMany(nutritionPlans);

    console.log('Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run the seed function
importData();