import React from "react";

const IntegrationSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 md:py-10 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Integration */}
        <div className="bg-purple-900 p-8 rounded-3xl text-white">
          <h3 className="font-semibold text-2xl mb-6">
            Integration with Calendar & Nutrition Analysis
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="bg-white rounded-2xl w-full sm:w-1/2 h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606327054629-64c8b0fd6e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Calendar app on smartphone"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl w-full sm:w-1/2 h-40 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Nutrition analysis chart"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-400 text-white text-xs px-3 py-1 rounded-full font-medium">
                +15%
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            What you need we will provide
          </h2>
          <div className="flex items-center gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
