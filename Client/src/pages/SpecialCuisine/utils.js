// Utility functions for SpecialCuisine components
export const getCategoryColorClass = (categoryColor) => {
  const colorMap = {
    amber: "text-amber-600",
    red: "text-red-600",
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
    cyan: "text-cyan-600",
    pink: "text-pink-600",
    teal: "text-teal-600",
    lime: "text-lime-600",
    orange: "text-orange-600",
    yellow: "text-yellow-600",
    brown: "text-amber-800",
    "deep-purple": "text-purple-800",
    "blue-grey": "text-blue-gray-600",
    "light-green": "text-green-500",
    "light-blue": "text-blue-400",
  };
  return colorMap[categoryColor] || "text-gray-600";
};

export const getHealthScoreDescription = (healthScore) => {
  if (healthScore > 85) return "excellent";
  if (healthScore > 75) return "very good";
  return "good";
};
