import React, { useState } from "react";
import PlanCards from "./PlanCards";
import BillingToggle from "./BillingToggle";

export default function ChoosePlan() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Billing Toggle */}
        <BillingToggle
          billingCycle={billingCycle}
          toggleBillingCycle={toggleBillingCycle}
        />

        {/* Plan Cards - Visual representation of plans */}
        <PlanCards
          selectedPlan={selectedPlan}
          handlePlanSelect={handlePlanSelect}
          billingCycle={billingCycle}
        />
      </div>
    </div>
  );
}
