import React, { useState } from "react";

export default function Form({ onSubmit, onCancel }) {
  // Form state
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [cuisineType, setCuisineType] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [calorieGoal, setCalorieGoal] = useState("2000");
  const [allergies, setAllergies] = useState("");
  const [mealCount, setMealCount] = useState("3");
  const [fitnessGoal, setFitnessGoal] = useState("maintain");
  const [tastePreferences, setTastePreferences] = useState([]);
  const [spiceLevel, setSpiceLevel] = useState("medium");
  const [mealTexture, setMealTexture] = useState([]);
  const [favoriteIngredients, setFavoriteIngredients] = useState("");
  const [dislikedIngredients, setDislikedIngredients] = useState("");
  const [cookingTime, setCookingTime] = useState("30");

  // Cuisine categories
  const cuisineCategories = [
    "Italian",
    "Asian",
    "Mediterranean",
    "American",
    "Indian",
    "Mexican",
    "Middle Eastern",
    "French",
    "Thai",
    "Japanese",
    "Chinese",
    "Korean",
    "Greek",
    "Spanish",
    "Caribbean",
    "African",
  ];

  // Dietary restriction options
  const dietaryOptions = [
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "gluten-free", label: "Gluten-Free" },
    { id: "dairy-free", label: "Dairy-Free" },
    { id: "keto", label: "Keto" },
    { id: "low-carb", label: "Low Carb" },
    { id: "paleo", label: "Paleo" },
    { id: "pescatarian", label: "Pescatarian" },
    { id: "low-sodium", label: "Low Sodium" },
    { id: "high-protein", label: "High Protein" },
    { id: "low-fat", label: "Low Fat" },
    { id: "sugar-free", label: "Sugar Free" },
  ];

  // Taste preference options
  const tasteOptions = [
    { id: "sweet", label: "Sweet" },
    { id: "savory", label: "Savory" },
    { id: "spicy", label: "Spicy" },
    { id: "sour", label: "Sour" },
    { id: "bitter", label: "Bitter" },
    { id: "umami", label: "Umami" },
  ];

  // Texture preference options
  const textureOptions = [
    { id: "crunchy", label: "Crunchy" },
    { id: "soft", label: "Soft" },
    { id: "chewy", label: "Chewy" },
    { id: "creamy", label: "Creamy" },
    { id: "crispy", label: "Crispy" },
    { id: "juicy", label: "Juicy" },
  ];

  // Spice level options
  const spiceLevels = [
    { id: "mild", label: "Mild" },
    { id: "medium", label: "Medium" },
    { id: "hot", label: "Hot" },
    { id: "extra-hot", label: "Extra Hot" },
  ];

  // Fitness goal options
  const fitnessGoals = [
    { id: "lose", label: "Weight Loss" },
    { id: "maintain", label: "Maintain Weight" },
    { id: "gain", label: "Muscle Gain" },
    { id: "performance", label: "Athletic Performance" },
  ];

  // Handle dietary restriction changes
  const handleDietaryChange = (restrictionId) => {
    if (dietaryRestrictions.includes(restrictionId)) {
      setDietaryRestrictions(
        dietaryRestrictions.filter((id) => id !== restrictionId)
      );
    } else {
      setDietaryRestrictions([...dietaryRestrictions, restrictionId]);
    }
  };

  // Handle taste preference changes
  const handleTasteChange = (tasteId) => {
    if (tastePreferences.includes(tasteId)) {
      setTastePreferences(tastePreferences.filter((id) => id !== tasteId));
    } else {
      setTastePreferences([...tastePreferences, tasteId]);
    }
  };

  // Handle texture preference changes
  const handleTextureChange = (textureId) => {
    if (mealTexture.includes(textureId)) {
      setMealTexture(mealTexture.filter((id) => id !== textureId));
    } else {
      setMealTexture([...mealTexture, textureId]);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data object
    const formData = {
      selectedDate,
      cuisineType,
      dietaryRestrictions,
      calorieGoal,
      allergies,
      mealCount,
      fitnessGoal,
      tastePreferences,
      spiceLevel,
      mealTexture,
      favoriteIngredients,
      dislikedIngredients,
      cookingTime,
    };

    // Pass form data to parent component
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto border border-purple-200">
        <div className="sticky top-0 bg-gradient-to-r from-purple-800 to-purple-900 text-white p-5 rounded-t-xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Customize Your Diet Plan</h2>
          </div>
          <button
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200 focus:outline-none"
            onClick={onCancel}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6 bg-gradient-to-b from-purple-50 to-white"
        >
          {/* Date Selection */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Meal Plan Date
            </label>
            <input
              type="date"
              className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          {/* Cuisine Type */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              Cuisine Type
            </label>
            <div className="relative">
              <select
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow appearance-none"
                value={cuisineType}
                onChange={(e) => setCuisineType(e.target.value)}
              >
                <option value="">Any Cuisine</option>
                {cuisineCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-600">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Fitness Goal */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-3 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Fitness Goal
            </label>
            <div className="grid grid-cols-2 gap-3">
              {fitnessGoals.map((goal) => (
                <label
                  key={goal.id}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                    fitnessGoal === goal.id
                      ? "bg-purple-50 border-purple-300 shadow-sm"
                      : "border-gray-200 hover:border-purple-200"
                  }`}
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                    checked={fitnessGoal === goal.id}
                    onChange={() => setFitnessGoal(goal.id)}
                    name="fitnessGoal"
                  />
                  <span
                    className={`ml-2 ${
                      fitnessGoal === goal.id
                        ? "text-purple-900 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {goal.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Dietary Restrictions */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-3 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Dietary Restrictions
            </label>
            <div className="grid grid-cols-2 gap-2">
              {dietaryOptions.map((option) => {
                const isSelected = dietaryRestrictions.includes(option.id);
                return (
                  <label
                    key={option.id}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-purple-50 border-purple-300 shadow-sm"
                        : "border-gray-200 hover:border-purple-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                      checked={isSelected}
                      onChange={() => handleDietaryChange(option.id)}
                    />
                    <span
                      className={`ml-2 ${
                        isSelected
                          ? "text-purple-900 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Meal Count */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
              Number of Meals per Day
            </label>
            <div className="relative">
              <select
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow appearance-none"
                value={mealCount}
                onChange={(e) => setMealCount(e.target.value)}
              >
                <option value="3">3 meals (standard)</option>
                <option value="4">4 meals</option>
                <option value="5">5 meals</option>
                <option value="6">6 meals</option>
                <option value="2">2 meals (intermittent fasting)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-600">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Calorie Goal */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Daily Calorie Goal
            </label>
            <div className="relative">
              <input
                type="number"
                className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow"
                value={calorieGoal}
                onChange={(e) => setCalorieGoal(e.target.value)}
                min="1000"
                max="4000"
                step="100"
                required
              />
              <div className="absolute right-3 top-3 text-purple-600 font-medium">
                cal
              </div>
            </div>
            <p className="text-sm text-purple-600 mt-2 flex items-center gap-1">
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Recommended: 1500-2500 calories for most adults
            </p>
          </div>

          {/* Taste Preferences */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-3 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              Taste Preferences
            </label>
            <div className="grid grid-cols-3 gap-2">
              {tasteOptions.map((option) => {
                const isSelected = tastePreferences.includes(option.id);
                return (
                  <label
                    key={option.id}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-purple-50 border-purple-300 shadow-sm"
                        : "border-gray-200 hover:border-purple-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                      checked={isSelected}
                      onChange={() => handleTasteChange(option.id)}
                    />
                    <span
                      className={`ml-2 ${
                        isSelected
                          ? "text-purple-900 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Spice Level */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-3 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Spice Level
            </label>
            <div className="grid grid-cols-4 gap-3">
              {spiceLevels.map((level) => (
                <label
                  key={level.id}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                    spiceLevel === level.id
                      ? "bg-purple-50 border-purple-300 shadow-sm"
                      : "border-gray-200 hover:border-purple-200"
                  }`}
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                    checked={spiceLevel === level.id}
                    onChange={() => setSpiceLevel(level.id)}
                    name="spiceLevel"
                  />
                  <span
                    className={`ml-2 ${
                      spiceLevel === level.id
                        ? "text-purple-900 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {level.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Texture Preferences */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-3 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Texture Preferences
            </label>
            <div className="grid grid-cols-3 gap-2">
              {textureOptions.map((option) => {
                const isSelected = mealTexture.includes(option.id);
                return (
                  <label
                    key={option.id}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-purple-50 border-purple-300 shadow-sm"
                        : "border-gray-200 hover:border-purple-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                      checked={isSelected}
                      onChange={() => handleTextureChange(option.id)}
                    />
                    <span
                      className={`ml-2 ${
                        isSelected
                          ? "text-purple-900 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Favorite Ingredients */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              Favorite Ingredients
            </label>
            <textarea
              className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-20 shadow-sm hover:shadow transition-all duration-200"
              value={favoriteIngredients}
              onChange={(e) => setFavoriteIngredients(e.target.value)}
              placeholder="e.g., avocado, quinoa, salmon, sweet potatoes"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1 italic">
              Ingredients you love that we should include when possible
            </p>
          </div>

          {/* Disliked Ingredients */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Disliked Ingredients
            </label>
            <textarea
              className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-20 shadow-sm hover:shadow transition-all duration-200"
              value={dislikedIngredients}
              onChange={(e) => setDislikedIngredients(e.target.value)}
              placeholder="e.g., cilantro, mushrooms, olives"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1 italic">
              Ingredients you prefer to avoid (different from allergies)
            </p>
          </div>

          {/* Maximum Cooking Time */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Maximum Cooking Time (minutes)
            </label>
            <div className="relative">
              <input
                type="range"
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                min="15"
                max="120"
                step="15"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
              />
              <div className="flex justify-between text-xs text-purple-600 px-2 pt-2">
                <span>15</span>
                <span>30</span>
                <span>45</span>
                <span>60</span>
                <span>75</span>
                <span>90</span>
                <span>105</span>
                <span>120</span>
              </div>
              <p className="text-center mt-2 text-purple-800 font-medium">
                {cookingTime} minutes
              </p>
            </div>
          </div>

          {/* Allergies */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Allergies or Ingredients to Avoid
            </label>
            <textarea
              className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-20 shadow-sm hover:shadow transition-all duration-200"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              placeholder="e.g., peanuts, shellfish, eggs"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1 italic">
              Separate multiple items with commas
            </p>
          </div>

          {/* Submit Buttons */}
          <div className="sticky bottom-0 bg-white p-5 border-t border-purple-100 rounded-b-xl mt-8 -mx-6 -mb-6 shadow-inner">
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-5 py-2.5 border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium shadow-sm"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-lg hover:from-purple-800 hover:to-purple-950 transition-all duration-300 font-medium shadow-md flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Generate Diet Plan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
