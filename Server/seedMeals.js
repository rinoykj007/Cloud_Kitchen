const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Food = require("./models/Food");

// Load environment variables
dotenv.config();

// Meal data to upload
const mealData = [
  {
    name: "Grilled Turkey Breast with Steamed Asparagus and Brown Rice",
    type: "meal",
    category: "Lunch",
    categoryColor: "amber",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
    rating: 4.8,
    reviews: 125,
    difficulty: "Medium",
    healthScore: 85,
    cookTime: "10 minutes",
    steps: 4,
    nutrition: {
      calories: 450,
      carbs: 40,
      proteins: 35,
      fats: 12,
    },
  },
  {
    name: "Greek Salad with Feta and Olives",
    type: "meal",
    category: "Lunch",
    categoryColor: "amber",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    rating: 4.9,
    reviews: 98,
    difficulty: "Easy",
    healthScore: 92,
    cookTime: "8 minutes",
    steps: 3,
    nutrition: {
      calories: 280,
      carbs: 15,
      proteins: 12,
      fats: 22,
    },
  },
  {
    name: "Blueberry Protein Smoothie",
    type: "meal",
    category: "Breakfast",
    categoryColor: "green",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    rating: 4.8,
    reviews: 156,
    difficulty: "Easy",
    healthScore: 88,
    cookTime: "5 minutes",
    steps: 2,
    nutrition: {
      calories: 320,
      carbs: 35,
      proteins: 25,
      fats: 8,
    },
  },
  {
    name: "Grilled Salmon with Lemon and Asparagus",
    type: "meal",
    category: "Dinner",
    categoryColor: "orange",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
    rating: 4.9,
    reviews: 142,
    difficulty: "Medium",
    healthScore: 95,
    cookTime: "15 minutes",
    steps: 5,
    nutrition: {
      calories: 420,
      carbs: 12,
      proteins: 38,
      fats: 24,
    },
  },
  {
    name: "Oatmeal with Almond Butter and Berries",
    type: "meal",
    category: "Breakfast",
    categoryColor: "green",
    image:
      "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    rating: 4.6,
    reviews: 89,
    difficulty: "Easy",
    healthScore: 85,
    cookTime: "8 minutes",
    steps: 3,
    nutrition: {
      calories: 350,
      carbs: 45,
      proteins: 12,
      fats: 14,
    },
  },
  {
    name: "Grilled Chicken Wrap with Avocado and Spinach",
    type: "meal",
    category: "Lunch",
    categoryColor: "amber",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    rating: 4.7,
    reviews: 103,
    difficulty: "Easy",
    healthScore: 88,
    cookTime: "12 minutes",
    steps: 4,
    nutrition: {
      calories: 450,
      carbs: 40,
      proteins: 30,
      fats: 18,
    },
  },
  {
    name: "Quinoa Salad with Roasted Vegetables and Feta",
    type: "meal",
    category: "Dinner",
    categoryColor: "orange",
    image:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    rating: 4.5,
    reviews: 76,
    difficulty: "Medium",
    healthScore: 90,
    cookTime: "20 minutes",
    steps: 6,
    nutrition: {
      calories: 400,
      carbs: 50,
      proteins: 15,
      fats: 12,
    },
  },
  {
    name: "Avocado Toast with Poached Egg",
    type: "meal",
    category: "Breakfast",
    categoryColor: "green",
    image:
      "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    rating: 4.4,
    reviews: 92,
    difficulty: "Easy",
    healthScore: 82,
    cookTime: "10 minutes",
    steps: 3,
    nutrition: {
      calories: 320,
      carbs: 30,
      proteins: 14,
      fats: 18,
    },
  },
  {
    name: "Grilled Shrimp Tacos with Mango Salsa",
    type: "meal",
    category: "Lunch",
    categoryColor: "amber",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    rating: 4.8,
    reviews: 118,
    difficulty: "Medium",
    healthScore: 85,
    cookTime: "15 minutes",
    steps: 5,
    nutrition: {
      calories: 400,
      carbs: 45,
      proteins: 28,
      fats: 12,
    },
  },
  {
    name: "Baked Chicken Breast with Quinoa and Kale",
    type: "meal",
    category: "Dinner",
    categoryColor: "orange",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
    rating: 4.7,
    reviews: 134,
    difficulty: "Medium",
    healthScore: 93,
    cookTime: "25 minutes",
    steps: 6,
    nutrition: {
      calories: 480,
      carbs: 50,
      proteins: 40,
      fats: 15,
    },
  },
];

// Connect to MongoDB and seed data
const seedMeals = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing meal data
    await Food.deleteMany({ type: "meal" });
    console.log("🗑️ Cleared existing meal data");

    // Insert new meal data
    const result = await Food.insertMany(mealData);
    console.log(`🎉 Successfully inserted ${result.length} meals`);

    // Close connection
    // await mongoose.connection.close();
    // console.log("✅ Database connection closed");
  } catch (error) {
    console.error("❌ Error seeding meals:", error);
    process.exit(1);
  }
};

// Run the seeding script
seedMeals();
