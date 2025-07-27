import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import IntegrationSection from "./IntegrationSection";
import FeatureCard from "./FeatureCard";
import VideoCard from "./videocrad";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <FeatureCard />
      <VideoCard />
      <FeaturesSection />
      <IntegrationSection />
    </div>
  );
}
