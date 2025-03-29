// server/src/models/nutritionModel.js
const mongoose = require('mongoose');

const nutritionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: [{
      type: String
    }],
    details: {
      calories: {
        type: Number,
      },
      macros: {
        protein: String,
        carbs: String,
        fats: String
      },
      meals: [String]
    }
  },
  {
    timestamps: true,
  }
);

const Nutrition = mongoose.model('Nutrition', nutritionSchema);

module.exports = Nutrition;