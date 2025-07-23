import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryFilter from "./CategoryFilter.jsx";
import CuisineGrid from "./CuisineGrid.jsx";
import RecipeModal from "./RecipeModal.jsx";

const SpecialCuisine = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCuisines, setFilteredCuisines] = useState([]);
  const [allCuisines, setAllCuisines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [showRecipe, setShowRecipe] = useState(false);

  // Fetch cuisines from backend
  const fetchCuisines = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/foods/cuisines"
      );
      setAllCuisines(response.data.data);
    } catch (error) {
      console.error("Error fetching cuisines:", error);
      // Fallback to empty array if backend fails
      setAllCuisines([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchCuisines();
  }, []);

  // Get unique categories for filter
  const categories = [
    "All",
    ...new Set(allCuisines.map((cuisine) => cuisine.category)),
  ];

  // Filter cuisines based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredCuisines(allCuisines);
    } else {
      const filteredByCategory = allCuisines.filter(
        (cuisine) => cuisine.category === selectedCategory
      );
      setFilteredCuisines(filteredByCategory);
    }
  }, [selectedCategory, allCuisines]);

  // Event handlers
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  const handleHoverLeave = () => {
    setHoveredItem(null);
  };

  const handleViewRecipe = (cuisine) => {
    setSelectedCuisine(cuisine);
    setShowRecipe(true);
  };

  const handleCloseRecipe = () => {
    setShowRecipe(false);
    setSelectedCuisine(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-serif mb-4">Special Cuisines</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our collection of specially curated cuisines from around the
          world, designed to provide optimal nutrition while delighting your
          taste buds.
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading cuisines...</p>
        </div>
      ) : (
        <>
          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Cuisine Grid */}
          <CuisineGrid
            filteredCuisines={filteredCuisines}
            onHover={handleHover}
            onHoverLeave={handleHoverLeave}
            onViewRecipe={handleViewRecipe}
          />
        </>
      )}

      {/* Recipe Modal */}
      <RecipeModal
        showRecipe={showRecipe}
        selectedCuisine={selectedCuisine}
        onClose={handleCloseRecipe}
      />
    </div>
  );
};

export default SpecialCuisine;
