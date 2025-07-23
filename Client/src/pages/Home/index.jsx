import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import IntegrationSection from "./IntegrationSection";
import FeatureCard from "./FeatureCard";
import VideoCard from "./videocrad";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with visual appeal */}
      <HeroSection />

      {/* Meals for Busy People Section */}
      <FeatureCard />
      <VideoCard />

      {/* Features Section */}
      <FeaturesSection />

      {/* Integration Section */}
      <IntegrationSection />
    </div>
  );
}
