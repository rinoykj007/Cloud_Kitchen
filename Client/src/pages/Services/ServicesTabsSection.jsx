import React from "react";
import ServiceCards from "./ServiceCards";

const ServicesTabsSection = ({ services, activeTab, handleTabChange }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 relative inline-block">
          Our Premium Services
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 to-green-400"></div>
        </h2>
      </div>

      {/* Service Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleTabChange(service.id)}
            className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === service.id
                ? "bg-purple-900 text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-700 hover:border-purple-900"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Service Cards Preview - Visual Gallery */}
      <ServiceCards
        services={services}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
    </div>
  );
};

export default ServicesTabsSection;
