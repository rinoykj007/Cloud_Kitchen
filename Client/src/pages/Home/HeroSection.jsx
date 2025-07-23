import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 md:px-10 py-10 md:py-16 gap-8 md:gap-12">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-[1rem]">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          Recipe and Meal Plan App with Ai
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Save time in planning meals according to available ingredients and
          help users to have a healthy or customized diet.
        </p>
        <div className="flex items-center gap-4 mb-10">
          <button className="bg-purple-900 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-purple-800 transition-colors">
            Try for Free
          </button>
          <div className="bg-green-400 rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-green-500 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Nutrient Reminder */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">
            Don't forget to replenish the nutrients you need in a day.
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="border border-gray-300 rounded-full px-5 py-2 hover:border-purple-900 transition-colors cursor-pointer">
              Calories
            </div>
            <div className="border border-gray-300 rounded-full px-5 py-2 hover:border-purple-900 transition-colors cursor-pointer">
              Carbohydrates
            </div>
            <div className="border border-gray-300 rounded-full px-5 py-2 hover:border-purple-900 transition-colors cursor-pointer">
              Proteins
            </div>
            <div className="border border-gray-300 rounded-full px-5 py-2 hover:border-purple-900 transition-colors cursor-pointer">
              Fat
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Food Image */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Food Image Container */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Healthy meal bowl with vegetables and grains"
              className="w-full object-cover h-[250px]"
            />
          </div>

          {/* Nutrition Analysis Badge */}
          <div className="absolute top-6 left-6 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <div className="w-4 h-4 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-sm font-medium">Nutrition Analysis</span>
          </div>

          {/* Automatic Meal Plan Badge */}
          <div className="absolute bottom-10 right-10 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <div className="w-4 h-4 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-sm font-medium">Automatic Meal Plan</span>
          </div>
        </div>
        
        {/* Information Cards Below Image */}
        <div className="mt-8">
          {/* Information Cards in Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Required Recipe */}
            <div className="w-full sm:w-1/2 bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Required Recipe</h3>
              <div className="flex gap-2 mb-4 overflow-x-auto">
                <div className="bg-purple-900 text-white px-3 py-1 rounded-md text-xs whitespace-nowrap">
                  07:00
                </div>
                <div className="border border-gray-300 px-3 py-1 rounded-md text-xs whitespace-nowrap">
                  10:00
                </div>
                <div className="border border-gray-300 px-3 py-1 rounded-md text-xs whitespace-nowrap">
                  13:00
                </div>
                <div className="border border-gray-300 px-3 py-1 rounded-md text-xs whitespace-nowrap">
                  18:00
                </div>
              </div>

              <h4 className="text-sm font-medium mb-2">Recipe by the hour</h4>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                  alt="Recipe ingredients"
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>

            {/* Nutrients Required */}
            <div className="w-full sm:w-1/2 bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-1">
                Nutrients required
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                nutrients needed in a day
              </p>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-sm">Calories</span>
                    <span className="text-sm">1100/2000</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full">
                    <div
                      className="bg-green-400 h-2 rounded-full"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-sm">Carbohydrates</span>
                    <span className="text-sm">300/325</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full">
                    <div
                      className="bg-green-400 h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-sm">Proteins</span>
                    <span className="text-sm">10/75</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full">
                    <div
                      className="bg-green-400 h-2 rounded-full"
                      style={{ width: "13%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
