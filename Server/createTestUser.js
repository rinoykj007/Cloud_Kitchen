const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

const createTestUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Check if test user already exists
    const existingUser = await User.findOne({ email: "user@test.com" });
    if (existingUser) {
      console.log("Test user already exists!");
      console.log("Email: user@test.com");
      console.log("Password: user123");
      console.log("Role: user");
      console.log("You can use this to login and test cart functionality");
      process.exit(0);
    }

    // Create regular test user
    const testUser = await User.create({
      name: "Test User",
      email: "user@test.com",
      password: "user123", // This will be hashed automatically
      role: "user", // Regular user (not admin)
    });

    console.log("Test user created successfully!");
    console.log("Email: user@test.com");
    console.log("Password: user123");
    console.log("Role: user");
    console.log("You can now login and test the cart functionality!");

    process.exit(0);
  } catch (error) {
    console.error("Error creating test user:", error.message);
    process.exit(1);
  }
};

createTestUser();
