const express = require("express");
const router = express.Router();
const Food = require("../models/Food");
const { auth, adminOnly } = require("../middleware/auth");

// @route GET /api/foods
// @desc Get all foods (meals & cuisines) - Public access
router.get("/", async (req, res) => {
  try {
    const { type } = req.query; // ?type=meal or ?type=cuisine
    const filter = type ? { type } : {};

    const foods = await Food.find(filter).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: foods.length,
      data: foods,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

// @route GET /api/foods/meals
// @desc Get only meals - Public access
router.get("/meals", async (req, res) => {
  try {
    const meals = await Food.find({ type: "meal" }).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: meals.length,
      data: meals,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

// @route GET /api/foods/cuisines
// @desc Get only cuisines
router.get("/cuisines", async (req, res) => {
  try {
    const cuisines = await Food.find({ type: "cuisine" }).sort({
      createdAt: -1,
    });
    res.json({
      success: true,
      count: cuisines.length,
      data: cuisines,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

// @route GET /api/foods/:id
// @desc Get single food item
router.get("/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    res.json({
      success: true,
      data: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

// @route POST /api/foods
// @desc Create new food item - Admin only
router.post("/", auth, adminOnly, async (req, res) => {
  try {
    const food = await Food.create(req.body);

    res.status(201).json({
      success: true,
      data: food,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid food data",
      error: error.message,
    });
  }
});

// @route PUT /api/foods/:id
// @desc Update food item - Admin only
router.put("/:id", auth, adminOnly, async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    res.json({
      success: true,
      data: food,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Update failed",
      error: error.message,
    });
  }
});

// @route DELETE /api/foods/:id
// @desc Delete food item - Admin only
router.delete("/:id", auth, adminOnly, async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    res.json({
      success: true,
      message: "Food item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

module.exports = router;
