import React from "react";
import { specialCuisines } from "../../data/specialCuisineData";
import {
  featuredMeal,
  popularMeals,
  recommendedMeals,
} from "../../data/mealData";

// Plan visual representations
const PlanVisuals = {
  basic:
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  premium:
    "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  ultimate:
    "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
};

const PlanCards = ({ selectedPlan, handlePlanSelect, billingCycle }) => {
  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      description: "Perfect for individuals starting their health journey",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        "Access to 50+ healthy recipes",
        "Basic meal planning tools",
        "Weekly grocery list",
        "Basic nutrition tracking",
      ],
      mealsPerWeek: 5,
      cuisineAccess: 5,
      mealExamples: popularMeals.slice(0, 2),
    },
    {
      id: "premium",
      name: "Premium Plan",
      description: "Ideal for health enthusiasts seeking variety",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        "Access to 150+ healthy recipes",
        "Advanced meal planning tools",
        "Personalized nutrition advice",
        "Weekly grocery list with alternatives",
        "Detailed nutrition tracking",
        "Access to special cuisines",
      ],
      mealsPerWeek: 10,
      cuisineAccess: 10,
      mealExamples: [...recommendedMeals.slice(0, 1), featuredMeal],
      recommended: true,
    },
    {
      id: "ultimate",
      name: "Ultimate Plan",
      description: "Complete solution for nutrition optimization",
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      features: [
        "Access to 300+ healthy recipes",
        "Premium meal planning tools",
        "Personalized nutrition consultation",
        "Custom meal plans based on goals",
        "Advanced nutrition tracking and analytics",
        "Full access to all special cuisines",
        "Priority customer support",
      ],
      mealsPerWeek: "Unlimited",
      cuisineAccess: "All",
      mealExamples: [specialCuisines[0], specialCuisines[4]],
    },
  ];

  const getPrice = (plan) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavingsPercentage = (plan) => {
    const monthlyTotal = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return Math.round(((monthlyTotal - yearlyCost) / monthlyTotal) * 100);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-[10%]">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 transform ${
            selectedPlan === plan.id
              ? "scale-105 ring-4 ring-green-500"
              : "hover:scale-103"
          } ${
            plan.recommended
              ? "bg-gradient-to-br from-white to-green-50"
              : "bg-white"
          }`}
        >
          {/* Plan image header */}
          <div className="h-48 overflow-hidden">
            <img
              src={PlanVisuals[plan.id]}
              alt={plan.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            {plan.recommended && (
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                MOST POPULAR
              </div>
            )}
          </div>

          {/* Plan content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {plan.name}
            </h3>

            {/* Price display */}
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">
                  ${getPrice(plan)}
                </span>
                <span className="text-gray-600 ml-1">
                  /{billingCycle === "monthly" ? "mo" : "year"}
                </span>
              </div>

              {billingCycle === "yearly" && (
                <div className="text-green-600 text-sm font-medium mt-1">
                  Save {getSavingsPercentage(plan)}% with annual billing
                </div>
              )}
            </div>

            {/* Visual meal examples */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-600">Sample meals:</p>
                <button
                  className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // This could open a modal with more meals in the future
                    console.log(`View all ${plan.name} meals`);
                  }}
                >
                  View all
                </button>
              </div>
              <div className="overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                <div className="flex space-x-3 min-w-max">
                  {/* Show more meal examples - up to 8 */}
                  {[
                    ...plan.mealExamples,
                    ...plan.mealExamples,
                    ...plan.mealExamples,
                  ]
                    .slice(0, 8)
                    .map((meal, idx) => (
                      <div key={idx} className="relative group">
                        <img
                          src={meal.image}
                          alt={meal.name}
                          className="w-16 h-16 rounded-lg object-cover shadow-sm hover:shadow-md transition-shadow"
                        />

                        {/* Popup-style meal card on hover */}
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pointer-events-none w-64 border border-gray-200">
                          {/* Triangle pointer */}
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-200"></div>

                          {/* Header with image */}
                          <div className="flex items-center mb-3 pb-2 border-b border-gray-100">
                            <div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
                              <img
                                src={meal.image}
                                alt={meal.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">
                                {meal.name}
                              </h4>
                              {meal.cuisine && (
                                <span className="text-[10px] text-blue-600">
                                  {meal.cuisine} cuisine
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Meal tags */}
                          {meal.tags && meal.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {meal.tags.slice(0, 3).map((tag, i) => (
                                <span
                                  key={i}
                                  className="text-[9px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Rating */}
                          {meal.rating && (
                            <div className="flex items-center mb-3">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < Math.floor(meal.rating)
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="ml-1 text-xs text-gray-500">
                                {meal.rating}/5
                              </span>
                            </div>
                          )}

                          {/* Nutrition info */}
                          <div className="bg-gray-50 rounded-md p-2 mb-2">
                            <h5 className="text-xs font-medium text-gray-700 mb-1">
                              Nutrition Facts
                            </h5>
                            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] text-gray-500">
                                  Calories:
                                </span>
                                <span className="text-[10px] font-medium text-gray-900">
                                  {meal.calories}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] text-gray-500">
                                  Protein:
                                </span>
                                <span className="text-[10px] font-medium text-gray-900">
                                  {meal.protein}g
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] text-gray-500">
                                  Carbs:
                                </span>
                                <span className="text-[10px] font-medium text-gray-900">
                                  {meal.carbs ||
                                    Math.round((meal.calories * 0.4) / 4)}
                                  g
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] text-gray-500">
                                  Fat:
                                </span>
                                <span className="text-[10px] font-medium text-gray-900">
                                  {meal.fat ||
                                    Math.round((meal.calories * 0.3) / 9)}
                                  g
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Prep time if available */}
                          {meal.prepTime && (
                            <div className="flex items-center text-[10px] text-gray-500">
                              <svg
                                className="w-3 h-3 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>Prep time: {meal.prepTime} min</span>
                            </div>
                          )}
                        </div>

                        {/* Simple overlay with name (still visible on mobile) */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 rounded-lg opacity-0 group-hover:opacity-100 md:group-hover:opacity-0">
                          <span className="text-white text-xs text-center px-1 font-medium">
                            {meal.name.length > 15
                              ? `${meal.name.substring(0, 15)}...`
                              : meal.name}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Visual feature highlights */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">
                  Meals/week
                </span>
                <div className="flex">
                  {typeof plan.mealsPerWeek === "number" ? (
                    Array(
                      plan.mealsPerWeek > 10
                        ? 5
                        : Math.min(5, plan.mealsPerWeek)
                    )
                      .fill(0)
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-3 h-3 rounded-full mx-0.5 ${
                            idx <
                            (plan.mealsPerWeek > 10 ? 5 : plan.mealsPerWeek)
                              ? "bg-green-500"
                              : "bg-gray-200"
                          }`}
                        ></div>
                      ))
                  ) : (
                    <span className="text-sm font-semibold text-green-600">
                      {plan.mealsPerWeek}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Cuisines
                </span>
                <div className="flex">
                  {typeof plan.cuisineAccess === "number" ? (
                    Array(
                      plan.cuisineAccess > 10
                        ? 5
                        : Math.min(5, plan.cuisineAccess)
                    )
                      .fill(0)
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-3 h-3 rounded-full mx-0.5 ${
                            idx <
                            (plan.cuisineAccess > 10 ? 5 : plan.cuisineAccess)
                              ? "bg-blue-500"
                              : "bg-gray-200"
                          }`}
                        ></div>
                      ))
                  ) : (
                    <span className="text-sm font-semibold text-blue-600">
                      {plan.cuisineAccess}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Select button */}
            <button
              onClick={() => handlePlanSelect(plan.id)}
              className={`w-full py-3 rounded-lg transition-colors duration-200 font-medium ${
                selectedPlan === plan.id
                  ? "bg-green-600 text-white"
                  : plan.recommended
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {selectedPlan === plan.id ? "Selected" : "Choose Plan"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCards;
