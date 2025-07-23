import React, { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How personalized are your meal plans?",
      answer:
        "Our meal plans are highly personalized based on your dietary preferences, health goals, nutritional needs, allergies, and lifestyle. We use advanced algorithms and expert nutritionists to create plans that work specifically for you.",
    },
    {
      question: "Can I switch between different service plans?",
      answer:
        "Yes, you can upgrade, downgrade, or change your service plan at any time. Changes will be reflected in your next billing cycle, and our team will help ensure a smooth transition between services.",
    },
    {
      question: "How do I track my nutritional progress?",
      answer:
        "Our platform provides comprehensive nutrition tracking tools that allow you to monitor your daily intake, track macros and micros, and visualize your progress over time through intuitive charts and reports.",
    },
    {
      question: "Do you accommodate special dietary restrictions?",
      answer:
        "Absolutely! We accommodate a wide range of dietary restrictions including vegetarian, vegan, gluten-free, dairy-free, keto, paleo, and many more. We also handle food allergies and medical dietary requirements.",
    },
    {
      question: "How often are new recipes added to the platform?",
      answer:
        "We add new recipes weekly to keep your meal options fresh and exciting. Our culinary team constantly develops seasonal recipes and incorporates user feedback to expand our recipe database.",
    },
    {
      question: "Can I consult with a nutritionist directly?",
      answer:
        "Yes, our premium plans include direct consultations with certified nutritionists. You can schedule video calls, message them through our platform, and receive personalized advice for your specific nutrition questions.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 relative inline-block">
          Frequently Asked Questions
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 to-green-400"></div>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our nutrition services and how
          they can benefit you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 flex justify-between items-center"
            >
              <h3 className="font-medium text-gray-900">{faq.question}</h3>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  openFAQ === index
                    ? "bg-purple-900 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {openFAQ === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>
            {openFAQ === index && (
              <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Still have questions? We're here to help.
        </p>
        <button className="bg-purple-900 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-800 transition-colors inline-flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
