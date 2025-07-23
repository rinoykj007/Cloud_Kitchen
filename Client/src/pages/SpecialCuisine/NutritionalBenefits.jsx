import React from "react";
import { getHealthScoreDescription } from "./utils";

const NutritionalBenefits = ({ selectedCuisine }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Nutritional Benefits</h3>
      <p className="text-gray-600 mb-4">
        This {selectedCuisine.category} dish provides a balanced mix of
        nutrients with {selectedCuisine.nutrition.proteins}g of protein to
        support muscle health, {selectedCuisine.nutrition.carbs}g of
        carbohydrates for energy, and {selectedCuisine.nutrition.fats}g of
        healthy fats for hormone production and vitamin absorption.
      </p>
      <p className="text-gray-600">
        With a health score of {selectedCuisine.healthScore}/100, this meal is{" "}
        {getHealthScoreDescription(selectedCuisine.healthScore)} for maintaining
        a balanced diet while enjoying delicious {selectedCuisine.category}{" "}
        flavors.
      </p>
    </div>
  );
};

export default NutritionalBenefits;
