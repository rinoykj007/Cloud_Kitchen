import React from "react";

const StatsCards = ({ foods }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700">Total Foods</h3>
        <p className="text-3xl font-bold text-blue-600">{foods.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700">Meals</h3>
        <p className="text-3xl font-bold text-green-600">
          {foods.filter((food) => food.type === "meal").length}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700">Cuisines</h3>
        <p className="text-3xl font-bold text-purple-600">
          {foods.filter((food) => food.type === "cuisine").length}
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
