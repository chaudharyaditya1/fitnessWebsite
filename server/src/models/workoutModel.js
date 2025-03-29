// server/src/models/workoutModel.js
const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
      default: 0,
    },
    sets: {
      type: Number,
      required: true,
      default: 0,
    },
    duration: {
      type: String,
    },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Intermediate',
    },
    calories: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;