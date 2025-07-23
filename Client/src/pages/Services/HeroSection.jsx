import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-white rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Nutrition Services <br />
              <span className="text-green-400">Tailored For You</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 max-w-lg">
              Discover how our nutrition and meal planning services can help
              you achieve your health goals and transform your relationship
              with food.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-green-400 hover:text-white transition-colors shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-purple-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white p-3 rounded-3xl shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Healthy meal preparation"
                className="rounded-2xl w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-white p-4 rounded-2xl shadow-lg">
                <div className="text-sm font-medium">Trusted by</div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
