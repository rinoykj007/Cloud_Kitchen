import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 py-16 my-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Healthy meal with fruits and vegetables"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-transparent flex items-center justify-center md:hidden">
                <h3 className="text-white text-2xl font-bold">Ready to Transform Your Diet?</h3>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Limited Time Offer
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Diet?
              </h3>
              <p className="text-gray-600 mb-8">
                Get started today with a free consultation and personalized nutrition assessment. 
                Our expert team will help you create a plan that fits your lifestyle and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-purple-800 transition-colors flex items-center justify-center gap-2">
                  Get Started Now
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
                <button className="border-2 border-purple-900 text-purple-900 px-8 py-3 rounded-xl font-medium hover:bg-purple-50 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img
                        src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`}
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-purple-900">1,000+</span> people joined this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
