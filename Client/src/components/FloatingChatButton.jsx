import React, { useState } from "react";
import Ai from "./Ai";
import Customplan from "./Customplan";

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const fadeInStyle = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <style dangerouslySetInnerHTML={{ __html: fadeInStyle }} />
      {isOpen && (
        <div
          className="mb-3 rounded-xl bg-white p-5 shadow-lg w-64"
          style={{ animation: "fadeIn 0.3s ease" }}
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-purple-900 font-semibold text-lg mb-1">
              Meal Planning
            </h3>
            <Ai />
            <Customplan />
          </div>
        </div>
      )}
      <button
        className="h-14 w-14 flex items-center justify-center rounded-full bg-purple-900 text-white font-bold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        onClick={togglePopup}
      >
        {isOpen ? "Close" : "Chat"}
      </button>
    </div>
  );
}
