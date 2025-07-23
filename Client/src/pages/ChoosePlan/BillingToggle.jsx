import React from "react";

const BillingToggle = ({ billingCycle, toggleBillingCycle }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="bg-white p-2 rounded-full shadow-md flex items-center">
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            billingCycle === "monthly"
              ? "bg-green-500 text-white shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={toggleBillingCycle}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            billingCycle === "yearly"
              ? "bg-green-500 text-white shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={toggleBillingCycle}
        >
          Yearly
        </button>
      </div>
      
      {billingCycle === "yearly" && (
        <div className="mt-3 bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          Save up to 20% with annual billing
        </div>
      )}
    </div>
  );
};

export default BillingToggle;
