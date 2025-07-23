import React, { useState } from "react";

// FAQ images
const FaqImages = [
  "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
];

// FAQ data
const faqs = [
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can switch between plans at any time. Changes will take effect at the start of your next billing cycle."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial for all new users. You can explore all the features of our Premium plan during this period."
  },
  {
    question: "How customizable are the meal plans?",
    answer: "Our meal plans are highly customizable. You can set dietary preferences, allergies, and food dislikes."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time through your account settings. Navigate to 'Subscription' and click on 'Cancel Subscription'."
  },
];

const FAQSection = () => {
  const [openFaqs, setOpenFaqs] = useState([]);
  
  // Toggle FAQ open/closed state
  const toggleFaq = (index) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Frequently Asked Questions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
          {FaqImages.map((image, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-md transform ${
                index % 3 === 0 ? "rotate-2" : 
                index % 3 === 1 ? "-rotate-2" : ""
              }`}
            >
              <img 
                src={image} 
                alt="Healthy food" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openFaqs.includes(index) ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              
              {openFaqs.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
