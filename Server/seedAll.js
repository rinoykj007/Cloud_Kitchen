const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Food = require("./models/Food");

// Load environment variables
dotenv.config();

// Combined seed script to upload both meals and cuisines
const seedAllFoods = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear all existing food data
    await Food.deleteMany({});
    console.log("🗑️ Cleared all existing food data");

    console.log("📤 Starting to seed meals...");
    // Run meal seeding
    require("./seedMeals");

    // Wait a bit for meals to complete
    setTimeout(async () => {
      console.log("📤 Starting to seed cuisines...");
      // Run cuisine seeding
      require("./seedCuisines");
    }, 2000);
  } catch (error) {
    console.error("❌ Error in main seeding script:", error);
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  console.log("🚀 Starting complete food database seeding...");
  seedAllFoods();
}

module.exports = seedAllFoods;
