import React from "react";

const RecipeSteps = ({ selectedCuisine }) => {
  const steps = [
    {
      number: 1,
      title: "Prepare Ingredients",
      description: `Gather all fresh ingredients for your ${selectedCuisine.name}. Wash and chop vegetables, measure spices, and prepare proteins.`,
    },
    {
      number: 2,
      title: "Cook Base Components",
      description: `Begin by cooking the base components of your ${selectedCuisine.category} cuisine. This typically involves sautéing aromatics or preparing the foundation of the dish.`,
    },
    {
      number: 3,
      title: "Add Main Ingredients",
      description: `Add your main ingredients and cook according to the ${selectedCuisine.difficulty.toLowerCase()} difficulty level instructions. This should take approximately ${
        selectedCuisine.cookTime
      }.`,
    },
  ];

  // Add conditional steps
  if (selectedCuisine.steps > 3) {
    steps.push({
      number: 4,
      title: "Season and Adjust",
      description: `Season your dish with appropriate spices and herbs for authentic ${selectedCuisine.category} flavor. Adjust taste and consistency as needed.`,
    });
  }

  if (selectedCuisine.steps > 4) {
    steps.push({
      number: 5,
      title: "Final Touches",
      description: `Add final touches and garnishes to enhance the presentation and flavor profile of your ${selectedCuisine.name}.`,
    });
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">Recipe</h3>
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="bg-purple-100 text-purple-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              {step.number}
            </div>
            <div>
              <h4 className="font-medium">{step.title}</h4>
              <p className="text-gray-600 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSteps;
