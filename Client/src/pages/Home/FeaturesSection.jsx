import React from "react";

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 md:py-10 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recipe Search */}
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="font-semibold text-2xl mb-6">
            Recipe Search by Ingredient
          </h3>
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Various ingredients on a table"
              className="w-full h-40 object-cover"
            />
          </div>
        </div>

        {/* Automatic Meal Plan */}
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="font-semibold text-2xl mb-6">Automatic Meal Plan</h3>
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Clock with vegetables for meal planning"
              className="w-full h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
