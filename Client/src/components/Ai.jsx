import React, { useState } from "react";
import Form from "./form";

// API key for Google's Generative AI
const API_KEY = "AIzaSyDNPWmnklzKc4GYxKCw6Quky-MJQOrAbXQ";

const formatMealPlanResponse = (response) => {
  const lines = response.split("\n");

  let currentSection = null;
  let currentMeal = null;
  let inIngredients = false;
  let inInstructions = false;
  let inNutrition = false;
  let inImportantNotes = false;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border-l-4 border-purple-500">
        <h2 className="text-xl font-bold text-purple-900 mb-2">
          Personalized Meal Plan
        </h2>
        <p className="text-sm text-purple-700">
          {lines[0]?.includes("meal plan for")
            ? lines[0]
            : "Your custom meal plan"}
        </p>
      </div>

      {lines.some((line) => line.includes("Important Considerations")) && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
          <h3 className="font-bold text-blue-800 mb-2 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
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
            Important Considerations
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-800">
            {lines
              .filter(
                (line) => line.trim().startsWith("*") && !line.includes("**")
              )
              .map((line, idx) => (
                <li key={`consideration-${idx}`} className="text-sm">
                  {line.replace("*", "").trim()}
                </li>
              ))}
          </ul>
        </div>
      )}

      {lines.map((line, index) => {
        if (!line.trim()) return null;

        if (line.includes("**Meal Plan") && line.includes("2025**")) {
          return (
            <div
              key={`header-${index}`}
              className="border-b-2 border-purple-200 pb-2 mb-6"
            >
              <h2 className="text-xl font-bold text-purple-900">
                {line.replace(/\*\*/g, "")}
              </h2>
            </div>
          );
        }

        if (line.match(/\*\*Meal \d+: .* \(.*\) - ~\d+ Calories\*\*/)) {
          const mealInfo = line.replace(/\*\*/g, "").split(" - ");
          const mealTitle = mealInfo[0]; // "Meal 1: Breakfast (7:30 AM - 8:30 AM)"
          const calories = mealInfo[1].replace("~", "").trim(); // "450 Calories"

          currentMeal = mealTitle;
          inIngredients = false;
          inInstructions = false;
          inNutrition = false;

          return (
            <div
              key={`meal-${index}`}
              className="meal-section bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                  <h3 className="text-lg font-bold text-purple-900">
                    {mealTitle}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {calories}
                </span>
              </div>
            </div>
          );
        }

        if (line.includes("**Dish:**")) {
          const dishName = line.replace("**Dish:**", "").trim();
          return (
            <div key={`dish-${index}`} className="ml-4 mb-3">
              <h4 className="text-md font-semibold text-gray-800">
                {dishName}
              </h4>
            </div>
          );
        }

        if (line.includes("**Ingredients:**")) {
          inIngredients = true;
          inInstructions = false;
          inNutrition = false;

          return (
            <div key={`ing-header-${index}`} className="ml-4 mt-4 mb-2">
              <h5 className="text-sm font-medium text-gray-700 flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Ingredients
              </h5>
            </div>
          );
        }

        if (line.includes("**Instructions:**")) {
          inIngredients = false;
          inInstructions = true;
          inNutrition = false;

          return (
            <div key={`inst-header-${index}`} className="ml-4 mt-4 mb-2">
              <h5 className="text-sm font-medium text-gray-700 flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-blue-500"
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
                Preparation Steps
              </h5>
            </div>
          );
        }

        if (line.includes("**Nutrition Facts")) {
          inIngredients = false;
          inInstructions = false;
          inNutrition = true;

          return (
            <div key={`nutr-header-${index}`} className="ml-4 mt-4 mb-2">
              <h5 className="text-sm font-medium text-gray-700 flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Nutrition Facts
              </h5>
            </div>
          );
        }

        if (line.includes("**Daily Totals")) {
          return (
            <div
              key={`totals-${index}`}
              className="mt-8 bg-purple-50 p-4 rounded-lg border border-purple-200"
            >
              <h3 className="text-lg font-bold text-purple-900 mb-3">
                {line.replace(/\*\*/g, "")}
              </h3>
            </div>
          );
        }

        // Important notes section
        if (line.includes("**Important Notes:**")) {
          inImportantNotes = true;
          return (
            <div
              key={`notes-${index}`}
              className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200"
            >
              <h3 className="text-md font-bold text-yellow-800 mb-2 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
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
                Important Notes
              </h3>
            </div>
          );
        }

        if (
          line.includes("**Calories:**") ||
          line.includes("**Protein:**") ||
          line.includes("**Carbohydrates:**") ||
          line.includes("**Fat:**")
        ) {
          const cleanLine = line.replace(/\*\*/g, "");
          const [label, value] = cleanLine
            .split(":")
            .map((part) => part.trim());
          let color = "bg-purple-500";
          let textColor = "text-purple-700";

          if (label.includes("Protein")) {
            color = "bg-green-500";
            textColor = "text-green-700";
          }
          if (label.includes("Carbohydrates")) {
            color = "bg-blue-500";
            textColor = "text-blue-700";
          }
          if (label.includes("Fat")) {
            color = "bg-orange-500";
            textColor = "text-orange-700";
          }

          return (
            <div key={`total-${index}`} className="flex items-center mb-2 ml-4">
              <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
              <span className={`font-medium ${textColor}`}>{label}:</span>
              <span className="ml-2 font-bold">{value}</span>
            </div>
          );
        }

        // Nutrition values in meal sections
        if (
          (inNutrition && line.includes("* Calories:")) ||
          line.includes("* Protein:") ||
          line.includes("* Carbohydrates:") ||
          line.includes("* Fat:")
        ) {
          const cleanLine = line.replace("*", "").trim();
          const [label, value] = cleanLine
            .split(":")
            .map((part) => part.trim());
          let color = "text-purple-600";

          if (label.includes("Protein")) color = "text-green-600";
          if (label.includes("Carbohydrates")) color = "text-blue-600";
          if (label.includes("Fat")) color = "text-orange-600";

          return (
            <div key={`nutr-${index}`} className="flex items-center ml-6 mb-1">
              <div className="w-1 h-1 rounded-full bg-gray-400 mr-2"></div>
              <span className={`text-sm ${color} font-medium`}>{label}:</span>
              <span className="ml-1 text-sm">{value}</span>
            </div>
          );
        }

        // Ingredient items
        if (inIngredients && line.trim().startsWith("*")) {
          const ingredient = line.replace("*", "").trim();
          return (
            <div key={`ing-${index}`} className="flex items-start ml-6 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 mr-2"></div>
              <span className="text-gray-700 text-sm">{ingredient}</span>
            </div>
          );
        }

        // Instruction steps
        if (inInstructions && line.match(/^\d+\./)) {
          const step = line.trim();
          const stepNumber = step.split(".")[0];
          const instruction = step.substring(step.indexOf(".") + 1).trim();

          return (
            <div key={`step-${index}`} className="flex items-start ml-6 mb-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-xs font-bold">
                {stepNumber}
              </div>
              <span className="text-gray-700 text-sm">{instruction}</span>
            </div>
          );
        }

        // Important notes items
        if (inImportantNotes && line.trim().startsWith("*")) {
          const note = line.replace("*", "").trim();
          return (
            <div key={`note-${index}`} className="flex items-start ml-4 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2"></div>
              <span className="text-yellow-800 text-sm">{note}</span>
            </div>
          );
        }

        // Default rendering for other lines
        if (
          !line.includes("**") &&
          line.trim() &&
          !line.trim().startsWith("*")
        ) {
          return (
            <p key={`text-${index}`} className="text-gray-700 text-sm ml-4">
              {line}
            </p>
          );
        }

        return null;
      })}

      {/* Final message */}
      <div className="text-center mt-8 text-gray-500 text-sm italic">
        This meal plan is designed to help you achieve your health and fitness
        goals while respecting your dietary preferences.
      </div>
    </div>
  );
};

export default function Ai() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Handle form submission
  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setShowResponse(true);
    setShowForm(false);

    // Format the date for display in the prompt
    const dateObj = new Date(formData.selectedDate);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Build the prompt based on user preferences
    let prompt = `Suggest a healthy meal plan for ${formattedDate}`;

    if (formData.cuisineType) {
      prompt += ` with ${formData.cuisineType} cuisine`;
    }

    if (formData.dietaryRestrictions.length > 0) {
      prompt += ` that is ${formData.dietaryRestrictions.join(
        " and "
      )} friendly`;
    }

    // Add fitness goal to prompt
    if (formData.fitnessGoal) {
      const goalMap = {
        lose: "weight loss",
        maintain: "weight maintenance",
        gain: "muscle gain",
        performance: "athletic performance",
      };
      prompt += ` optimized for ${
        goalMap[formData.fitnessGoal] || formData.fitnessGoal
      }`;
    }

    prompt += ` including ${formData.mealCount} meals per day. Target approximately ${formData.calorieGoal} total calories for the day.`;

    if (formData.allergies) {
      prompt += ` Avoid the following allergens: ${formData.allergies}.`;
    }

    prompt +=
      " Include approximate calories and detailed nutrition facts (proteins, carbs, fats) for each meal. Also suggest appropriate meal times based on the day of the week.";

    try {
      // Call the Google Generative AI REST API
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();

      // Extract the text from the response
      const generatedText = data.candidates[0].content.parts[0].text;
      setResponse(generatedText);
    } catch (error) {
      console.error("Error generating meal suggestion:", error);

      // Fallback to sample response if API fails
      const fallbackResponse = `Healthy Meal Plan for Today:

Breakfast (450 calories):
- Greek yogurt (150g) with berries (100g) and honey (1 tbsp)
- Whole grain toast (1 slice) with avocado (1/4)
- Green tea

Nutrition: 24g protein, 45g carbs, 18g fat

Lunch (550 calories):
- Quinoa salad with grilled chicken (120g), mixed vegetables, and olive oil dressing
- Apple (1 medium)
- Water with lemon

Nutrition: 35g protein, 65g carbs, 15g fat

Dinner (500 calories):
- Baked salmon (150g) with herbs
- Steamed broccoli and carrots (150g)
- Brown rice (1/2 cup)

Nutrition: 38g protein, 40g carbs, 20g fat

Total daily nutrition:
- Calories: 1500
- Protein: 97g
- Carbs: 150g
- Fat: 53g`;

      setResponse(fallbackResponse);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        className="w-full py-3 px-4 flex items-center gap-3 rounded-lg bg-gradient-to-r from-purple-800 to-purple-900 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
        onClick={() => setShowForm(true)}
        disabled={loading}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span>AI Meal Assistant</span>
      </button>

      {/* Show the form when button is clicked */}
      {showForm && (
        <Form onSubmit={handleFormSubmit} onCancel={() => setShowForm(false)} />
      )}

      {showResponse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-purple-900 text-white p-4 rounded-t-xl flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                AI Meal Plan Suggestions
              </h2>
              <button
                className="text-white hover:text-gray-200 focus:outline-none"
                onClick={() => setShowResponse(false)}
              >
                <svg
                  className="w-6 h-6"
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

            <div className="p-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <svg
                    className="animate-spin h-12 w-12 text-purple-600 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <p className="text-lg text-gray-600">
                    Generating your personalized meal plan...
                  </p>
                </div>
              ) : (
                <div className="text-gray-700 text-base leading-relaxed">
                  {response
                    ? formatMealPlanResponse(response)
                    : "No suggestions available yet."}
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-gray-50 p-4 border-t border-gray-200 rounded-b-xl">
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-800 transition-colors duration-200"
                  onClick={() => setShowResponse(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
