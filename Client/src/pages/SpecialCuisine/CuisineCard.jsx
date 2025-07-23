import React from "react";
import { StarIcon, ClockIcon, ChartIcon, HeartIcon } from "./Icons";
import { getCategoryColorClass } from "./utils";

const CuisineCard = ({
  cuisine,
  index,
  onHover,
  onHoverLeave,
  onViewRecipe,
}) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onHoverLeave}
    >
      {/* Cuisine Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={cuisine.image}
          alt={cuisine.name}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm ${getCategoryColorClass(
            cuisine.categoryColor
          )}`}
        >
          {cuisine.category}
        </div>
        <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-sm">
          <div className="flex items-center gap-1">
            <StarIcon />
            <span className="text-xs font-medium">{cuisine.rating}</span>
          </div>
        </div>
      </div>

      {/* Cuisine Details */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">
          {cuisine.name}
        </h3>

        {/* Nutrition Info */}
        <div className="flex items-center justify-between mt-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-xs text-gray-600">
              {cuisine.nutrition.calories} cal
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-xs text-gray-600">
              {cuisine.nutrition.proteins}g protein
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-xs text-gray-600">
              {cuisine.nutrition.carbs}g carbs
            </span>
          </div>
        </div>

        {/* Difficulty and Time */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <ChartIcon />
            <span className="text-xs text-gray-600">{cuisine.difficulty}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon />
            <span className="text-xs text-gray-600">{cuisine.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <HeartIcon />
            <span className="text-xs text-gray-600">{cuisine.healthScore}</span>
          </div>
        </div>

        {/* View Recipe Button */}
        <button
          className="w-full mt-4 bg-purple-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-800 transition-colors"
          onClick={() => onViewRecipe(cuisine)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default CuisineCard;
