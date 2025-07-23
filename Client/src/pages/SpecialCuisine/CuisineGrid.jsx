import React from "react";
import CuisineCard from "./CuisineCard";

const CuisineGrid = ({
  filteredCuisines,
  onHover,
  onHoverLeave,
  onViewRecipe,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredCuisines.map((cuisine, index) => (
        <CuisineCard
          key={cuisine.id}
          cuisine={cuisine}
          index={index}
          onHover={onHover}
          onHoverLeave={onHoverLeave}
          onViewRecipe={onViewRecipe}
        />
      ))}
    </div>
  );
};

export default CuisineGrid;
