import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

  const cartCount = getCartCount();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-10">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-purple-900">Meal</span>
            <span className="text-green-500">plan</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="font-medium relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/services" className="font-medium relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/meals" className="font-medium relative group">
            Meals
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/plans" className="font-medium relative group">
            Choose Plan
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          {/* Admin Link - Only for admin users */}
          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="font-medium relative group text-red-600"
            >
              Admin
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
        </div>

        {/* Auth Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Cart Button - Only show for authenticated users */}
          {isAuthenticated && (
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-purple-900 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          )}

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.name || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-purple-900 hover:text-purple-700 font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gray-200 text-purple-900 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300 font-medium"
              >
                Sign Up
              </Link>
              <Link
                to="/contact"
                className="bg-purple-900 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 font-medium"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="font-medium hover:text-purple-900 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="font-medium hover:text-purple-900 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/meals"
              className="font-medium hover:text-purple-900 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Meals
            </Link>
            <Link
              to="/plans"
              className="font-medium hover:text-purple-900 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Choose Plan
            </Link>
            {/* Admin Link - Mobile */}
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className="font-medium text-red-600 hover:text-red-700 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            )}

            {/* Cart Link - Mobile - Only for authenticated users */}
            {isAuthenticated && (
              <Link
                to="/cart"
                className="font-medium hover:text-purple-900 transition-colors duration-300 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Cart</span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  {cartCount > 0 && (
                    <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            )}

            {/* Auth Section - Mobile */}
            {isAuthenticated ? (
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  Welcome, {user?.name || user?.email}
                </p>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-full font-medium w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <Link
                  to="/signup"
                  className="block text-center bg-green-600 text-white px-4 py-2 rounded-full font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="block text-center bg-purple-900 text-white px-4 py-2 rounded-full font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/contact"
                  className="block text-center bg-gray-200 text-purple-900 px-4 py-2 rounded-full font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
