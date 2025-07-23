import React from "react";

const FoodPreferenceSelector = ({ onPreferenceSelected }) => {
  const preferences = [
    {
      id: "all",
      name: "All Foods",
      description: "No dietary restrictions",
      icon: "🍽️",
      color: "purple",
    },
    {
      id: "vegetarian",
      name: "Vegetarian",
      description: "No meat, may include dairy and eggs",
      icon: "🥗",
      color: "green",
    },
    {
      id: "vegan",
      name: "Vegan",
      description: "No animal products",
      icon: "🌱",
      color: "emerald",
    },
    {
      id: "non-veg",
      name: "Non-Vegetarian",
      description: "Includes all food types",
      icon: "🍗",
      color: "red",
    },
    {
      id: "pescatarian",
      name: "Pescatarian",
      description: "Vegetarian plus seafood",
      icon: "🐟",
      color: "blue",
    },
    {
      id: "keto",
      name: "Keto",
      description: "Low-carb, high-fat diet",
      icon: "🥑",
      color: "yellow",
    },
  ];

  return (
    <div className="bg-purple-50 min-h-screen p-4 font-sans flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-2">
          <span className="text-purple-900">Choose Your</span>{" "}
          <span className="text-green-500">Food Preference</span>
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Select your dietary preference to personalize your meal options
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {preferences.map((preference) => (
            <button
              key={preference.id}
              onClick={() => onPreferenceSelected(preference.id)}
              className={`bg-white p-6 rounded-xl shadow-sm border border-${preference.color}-100 hover:border-${preference.color}-300 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center`}
            >
              <span className="text-4xl mb-3">{preference.icon}</span>
              <h3
                className={`text-lg font-bold text-${preference.color}-700 mb-1`}
              >
                {preference.name}
              </h3>
              <p className="text-gray-500 text-sm">{preference.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodPreferenceSelector;
