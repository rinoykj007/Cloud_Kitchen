import React from "react";
import { specialCuisines } from "../../data/specialCuisineData";
import {
  featuredMeal,
  popularMeals,
  recommendedMeals,
} from "../../data/mealData";

const MealExamples = () => {
  const showcaseMeals = [
    ...popularMeals,
    featuredMeal,
    ...recommendedMeals.slice(0, 1),
    specialCuisines[0],
    specialCuisines[4],
    specialCuisines[5],
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Sample Meals You'll Enjoy
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        Visual examples of the delicious, healthy meals available in our plans
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {showcaseMeals.slice(0, 8).map((meal, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-white bg-opacity-90 rounded-bl-lg px-2 py-1">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-800">
                    {meal.rating || "4.5+"}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <span
                  className={`text-xs font-bold text-white px-2 py-1 rounded-full bg-${
                    meal.categoryColor || "green"
                  }-500`}
                >
                  {meal.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-1 truncate">
                {meal.name}
              </h3>
              {meal.nutrition && (
                <div className="flex justify-between mt-2">
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Calories</div>
                    <div className="font-medium text-sm">
                      {meal.nutrition.calories}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Protein</div>
                    <div className="font-medium text-sm">
                      {meal.nutrition.proteins}g
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Carbs</div>
                    <div className="font-medium text-sm">
                      {meal.nutrition.carbs}g
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealExamples;
