const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

const createAdminUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await User.findOne({
      email: "admin@dietplanner.com",
    });
    if (existingAdmin) {
      console.log("Admin user already exists!");
      console.log("Email: admin@dietplanner.com");
      console.log("You can use this to login to admin dashboard");
      process.exit(0);
    }

    // Create admin user
    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@dietplanner.com",
      password: "admin123", // This will be hashed automatically
      role: "admin",
    });

    console.log("Admin user created successfully!");
    console.log("Email: admin@dietplanner.com");
    console.log("Password: admin123");
    console.log(
      "You can now login to the admin dashboard at http://localhost:5173/admin"
    );

    process.exit(0);
  } catch (error) {
    console.error("Error creating admin user:", error.message);
    process.exit(1);
  }
};

createAdminUser();
