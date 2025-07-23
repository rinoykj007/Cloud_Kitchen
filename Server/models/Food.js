const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["meal", "cuisine"],
      default: "meal",
    },
    category: {
      type: String,
      required: true,
      enum: [
        // Meal categories
        "Breakfast",
        "Lunch",
        "Dinner",
        "Snack",
        "Dessert",
        // Cuisine categories
        "Mediterranean",
        "Asian",
        "Italian",
        "Mexican",
        "Indian",
        "American",
        "French",
        "Other",
      ],
    },
    categoryColor: {
      type: String,
      default: "green",
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 4.0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
    healthScore: {
      type: Number,
      min: 0,
      max: 100,
      default: 80,
    },
    cookTime: {
      type: String,
      required: true,
    },
    steps: {
      type: Number,
      default: 3,
    },
    nutrition: {
      calories: {
        type: Number,
        required: true,
      },
      carbs: {
        type: Number,
        required: true,
      },
      proteins: {
        type: Number,
        required: true,
      },
      fats: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
