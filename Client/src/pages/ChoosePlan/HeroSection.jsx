import React from "react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-400 to-blue-500">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80" 
          alt="Healthy food background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Perfect Diet Plan
            </h1>
            <p className="text-xl text-white opacity-90">
              Personalized nutrition to match your lifestyle
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" 
                alt="Healthy meal" 
                className="rounded-lg shadow-lg transform rotate-2 hover:scale-105 transition duration-300"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Healthy meal" 
                className="rounded-lg shadow-lg transform -rotate-3 hover:scale-105 transition duration-300 mt-6"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
              <img 
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80" 
                alt="Healthy meal" 
                className="rounded-lg shadow-lg transform -rotate-2 hover:scale-105 transition duration-300 -mt-4"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80" 
                alt="Healthy meal" 
                className="rounded-lg shadow-lg transform rotate-3 hover:scale-105 transition duration-300 mt-2"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
