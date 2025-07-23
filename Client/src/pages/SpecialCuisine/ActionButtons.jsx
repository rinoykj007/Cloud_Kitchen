import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon, BookmarkIcon, ShareIcon } from "./Icons";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const ActionButtons = ({ item }) => {
  const { addToCart, isInCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Check if user is logged in
    if (!isAuthenticated) {
      // Redirect to login page
      navigate("/login");
      return;
    }

    if (item) {
      // Create a cart item from the cuisine/meal item
      const cartItem = {
        id: item._id || item.id,
        name: item.name,
        price: item.price || 15.99, // Default price if not specified
        image: item.image,
        category: item.category,
        type: item.type,
      };

      addToCart(cartItem);
      setIsAdded(true);

      // Reset the "added" state after 2 seconds
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  const isItemInCart = item ? isInCart(item._id || item.id) : false;

  // Function to get button text based on authentication and cart status
  const getButtonText = () => {
    if (!isAuthenticated) return "Login to Add to Cart";
    if (isAdded) return "Added to Cart!";
    if (isItemInCart) return "In Cart";
    return "Add to Cart";
  };

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
          !isAuthenticated
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : isAdded
            ? "bg-green-600 text-white"
            : isItemInCart
            ? "bg-gray-400 text-white"
            : "bg-purple-900 text-white hover:bg-purple-800"
        }`}
      >
        <PlusIcon />
        {getButtonText()}
      </button>
      <button className="border border-purple-900 text-purple-900 px-6 py-3 rounded-lg font-medium hover:bg-purple-900 hover:text-white transition-colors flex items-center gap-2">
        <BookmarkIcon />
        Save Recipe
      </button>
      <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
        <ShareIcon />
        Share
      </button>
    </div>
  );
};

export default ActionButtons;
