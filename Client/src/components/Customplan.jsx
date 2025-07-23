import React from "react";
import { Link } from "react-router-dom";

export default function Customplan() {
  return (
    <Link
      to="/meals"
      className="w-full py-3 px-4 flex items-center gap-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] no-underline text-white text-center"
      onClick={() => console.log("Custom Plan clicked")}
    >
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
          clipRule="evenodd"
        />
      </svg>
      <span>Custom Meal Plan</span>
    </Link>
  );
}
