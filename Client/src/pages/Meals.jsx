import React, { useState } from "react";
import FoodPreferenceSelector from "../components/meals/FoodPreferenceSelector";
import SpecialCuisine from "./SpecialCuisine/index.jsx";

// Data
import { allMenuMeals } from "../data/mealData";

function Meals() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedPreference, setSelectedPreference] = useState(null);
  const tabs = ["All", "Breakfast", "Lunch", "Snack", "Dinner"];

  // Handle food preference selection
  const handlePreferenceSelected = (preferenceId) => {
    setSelectedPreference(preferenceId);
    // You could filter meals based on preference here or fetch from API
  };

  // Filter meals based on active tab
  const filteredMeals =
    activeTab === "All"
      ? allMenuMeals
      : allMenuMeals.filter((meal) => meal.category === activeTab);

  // If no preference is selected, show the preference selector
  if (!selectedPreference) {
    return (
      <FoodPreferenceSelector onPreferenceSelected={handlePreferenceSelected} />
    );
  }

  // Once preference is selected, show the meals
  return (
    <div className="bg-purple-50 min-h-screen p-4 font-sans">
      {/* Food Preference Indicator */}
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">
            Selected preference:
          </span>
          <button
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center"
            onClick={() => setSelectedPreference(null)}
          >
            {selectedPreference === "vegan" && "🌱 Vegan"}
            {selectedPreference === "vegetarian" && "🥗 Vegetarian"}
            {selectedPreference === "non-veg" && "🍗 Non-Vegetarian"}
            {selectedPreference === "pescatarian" && "🐟 Pescatarian"}
            {selectedPreference === "keto" && "🥑 Keto"}
            {selectedPreference === "all" && "🍽️ All Foods"}
            <span className="ml-2 text-xs">(change)</span>
          </button>
        </div>
      </div>
      <SpecialCuisine />
    </div>
  );
}

export default Meals;
