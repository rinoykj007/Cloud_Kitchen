import React, { useState } from "react";
import HeroSection from "./HeroSection";
import ServicesTabsSection from "./ServicesTabsSection";
import CallToAction from "./CallToAction";
import FAQSection from "./FAQSection";

// Service data that will be shared across components
import { services } from "./servicesData";

function Services() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Overlapping Elements */}
      <HeroSection />

      {/* Services Tabs Section */}
      <ServicesTabsSection
        services={services}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />

      {/* Call to Action */}
      <CallToAction />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

export default Services;
