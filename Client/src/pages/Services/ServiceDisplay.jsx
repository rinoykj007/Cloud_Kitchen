import React from "react";
import * as ServiceIcons from "./ServiceIcons";

const ServiceDisplay = ({ service }) => {
  // Get the appropriate icon component based on iconName
  const IconComponent = service.iconName
    ? ServiceIcons[service.iconName]
    : null;
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Visual Gallery Section */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Image */}
          <div className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden h-80">
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-purple-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                {service.title}
              </div>
            </div>
          </div>

          {/* Service Info Card */}
          <div className="flex flex-col">
            <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 text-purple-900 w-12 h-12 rounded-xl flex items-center justify-center">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Visual Feature Icons */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-3 rounded-xl text-center"
                    >
                      <div className="bg-green-400 w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-purple-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-800 transition-colors flex items-center justify-center gap-2 w-full">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Additional Images */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-40">
              <img
                src={service.images[1] || service.images[0]}
                alt={`${service.title} example`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-40 relative bg-purple-900">
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                <div>
                  <div className="text-3xl font-bold mb-1">5★</div>
                  <div className="text-sm">Highly Rated Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brief Description */}
      <div className="p-6 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceDisplay;
