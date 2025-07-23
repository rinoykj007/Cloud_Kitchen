import React from "react";

const FoodModal = ({
  showModal,
  editingFood,
  formData,
  onInputChange,
  onSubmit,
  onClose,
}) => {
  // Category options based on type
  const getCategoryOptions = () => {
    if (formData.type === "meal") {
      return ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
    } else {
      return [
        "Mediterranean",
        "Asian",
        "Italian",
        "Mexican",
        "Indian",
        "American",
        "French",
        "Other",
      ];
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingFood ? "Edit Food Item" : "Add New Food Item"}
          </h3>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={onInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="meal">Meal</option>
                <option value="cuisine">Cuisine</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={onInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                required
              >
                <option value="">Select Category</option>
                {getCategoryOptions().map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={onInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={onInputChange}
                  min="0"
                  max="5"
                  step="0.1"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Health Score
                </label>
                <input
                  type="number"
                  name="healthScore"
                  value={formData.healthScore}
                  onChange={onInputChange}
                  min="0"
                  max="100"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Difficulty
                </label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={onInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cook Time
                </label>
                <input
                  type="text"
                  name="cookTime"
                  value={formData.cookTime}
                  onChange={onInputChange}
                  placeholder="e.g., 15 minutes"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nutrition
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  name="nutrition.calories"
                  value={formData.nutrition.calories}
                  onChange={onInputChange}
                  placeholder="Calories"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <input
                  type="number"
                  name="nutrition.carbs"
                  value={formData.nutrition.carbs}
                  onChange={onInputChange}
                  placeholder="Carbs (g)"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <input
                  type="number"
                  name="nutrition.proteins"
                  value={formData.nutrition.proteins}
                  onChange={onInputChange}
                  placeholder="Proteins (g)"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <input
                  type="number"
                  name="nutrition.fats"
                  value={formData.nutrition.fats}
                  onChange={onInputChange}
                  placeholder="Fats (g)"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {editingFood ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
