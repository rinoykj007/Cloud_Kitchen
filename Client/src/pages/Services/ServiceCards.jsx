import React from "react";

const ServiceCards = ({ services, activeTab, handleTabChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      {services.map((service) => (
        <div
          key={service.id}
          onClick={() => handleTabChange(service.id)}
          className={`bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer transition-all duration-300 ${
            activeTab === service.id
              ? "ring-2 ring-purple-900 shadow-md transform scale-[1.02]"
              : "hover:shadow-md hover:scale-[1.01]"
          }`}
        >
          {/* Card Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={service.images[0]} 
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">
                    {service.title}
                  </h3>
                  <div
                    className={`${
                      activeTab === service.id
                        ? "bg-green-400"
                        : "bg-white"
                    } rounded-full w-8 h-8 flex items-center justify-center transition-colors`}
                  >
                    <div
                      className={
                        activeTab === service.id
                          ? "text-white"
                          : "text-purple-900"
                      }
                    >
                      {activeTab === service.id ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card Content */}
          <div className="p-4">
            {/* Visual Feature Icons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {service.features.slice(0, 3).map((feature, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center bg-purple-50 px-2 py-1 rounded-full text-xs text-purple-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature.split(' ')[0]}
                </span>
              ))}
              {service.features.length > 3 && (
                <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
                  +{service.features.length - 3}
                </span>
              )}
            </div>
            
            {/* Action Button */}
            <button
              className={`w-full ${
                activeTab === service.id
                  ? "bg-purple-900 text-white"
                  : "bg-purple-100 text-purple-900"
              } py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-1`}
            >
              {activeTab === service.id ? "Selected" : "View Details"}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
