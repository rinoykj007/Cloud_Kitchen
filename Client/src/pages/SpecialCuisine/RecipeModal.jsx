import React from "react";
import { CloseIcon, ClockIcon, ChartIcon, HeartIcon, StarIcon } from "./Icons";
import { getCategoryColorClass } from "./utils";
import RecipeSteps from "./RecipeSteps";
import NutritionalBenefits from "./NutritionalBenefits";
import ActionButtons from "./ActionButtons";

const RecipeModal = ({ showRecipe, selectedCuisine, onClose }) => {
  if (!showRecipe || !selectedCuisine) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="relative">
          <div className="h-64 overflow-hidden">
            <img
              src={selectedCuisine.image}
              alt={selectedCuisine.name}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <div
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-white shadow-sm ${getCategoryColorClass(
                selectedCuisine.categoryColor
              )}`}
            >
              {selectedCuisine.category}
            </div>
            <h2 className="text-white text-2xl font-bold mt-2">
              {selectedCuisine.name}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Nutrition Information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-xs text-gray-500 mb-1">Calories</div>
              <div className="text-xl font-bold text-gray-900">
                {selectedCuisine.nutrition.calories}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-xs text-gray-500 mb-1">Proteins</div>
              <div className="text-xl font-bold text-gray-900">
                {selectedCuisine.nutrition.proteins}g
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-xs text-gray-500 mb-1">Carbs</div>
              <div className="text-xl font-bold text-gray-900">
                {selectedCuisine.nutrition.carbs}g
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-xs text-gray-500 mb-1">Fats</div>
              <div className="text-xl font-bold text-gray-900">
                {selectedCuisine.nutrition.fats}g
              </div>
            </div>
          </div>

          {/* Cuisine Details */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-purple-900" />
              <span className="text-gray-700">{selectedCuisine.cookTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <ChartIcon className="w-5 h-5 text-purple-900" />
              <span className="text-gray-700">
                Difficulty: {selectedCuisine.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <HeartIcon className="w-5 h-5 text-purple-900" />
              <span className="text-gray-700">
                Health Score: {selectedCuisine.healthScore}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">
                {selectedCuisine.rating} ({selectedCuisine.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Recipe Steps */}
          <RecipeSteps selectedCuisine={selectedCuisine} />

          {/* Nutritional Benefits */}
          <NutritionalBenefits selectedCuisine={selectedCuisine} />

          {/* Action Buttons */}
          <ActionButtons item={selectedCuisine} />
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
