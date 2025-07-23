import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

// Admin Components
import AdminHeader from "../../components/admin/AdminHeader";
import StatsCards from "../../components/admin/StatsCards";
import AddButton from "../../components/admin/AddButton";
import FoodsTable from "../../components/admin/FoodsTable";
import FoodModal from "../../components/admin/FoodModal";

export default function Admin() {
  const { user, logout } = useAuth();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "meal",
    category: "",
    image: "",
    rating: 4.0,
    difficulty: "Easy",
    healthScore: 80,
    cookTime: "",
    steps: 1,
    calories: 0,
    carbs: 0,
    proteins: 0,
    fats: 0,
  });

  // Fetch foods from backend
  const fetchFoods = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:5000/api/foods", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFoods(response.data.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
      if (error.response?.status === 401) {
        logout(); // Auto logout if token is invalid
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // Simple function to update form data when user types
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Update the form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Create new food
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      // Prepare data in the format backend expects
      const foodData = {
        ...formData,
        nutrition: {
          calories: formData.calories,
          carbs: formData.carbs,
          proteins: formData.proteins,
          fats: formData.fats,
        },
      };

      await axios.post("http://localhost:5000/api/foods", foodData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchFoods();
      setShowModal(false);
      resetForm();
    } catch (error) {
      console.error("Error creating food:", error);
      if (error.response?.status === 401) {
        logout();
      }
    }
  };

  // Update existing food
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      // Prepare data in the format backend expects
      const foodData = {
        ...formData,
        nutrition: {
          calories: formData.calories,
          carbs: formData.carbs,
          proteins: formData.proteins,
          fats: formData.fats,
        },
      };

      await axios.put(
        `http://localhost:5000/api/foods/${editingFood}`,
        foodData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchFoods();
      setShowModal(false);
      setEditingFood(null);
      resetForm();
    } catch (error) {
      console.error("Error updating food:", error);
      if (error.response?.status === 401) {
        logout();
      }
    }
  };

  // Handle form submission (create or update)
  const handleSubmit = editingFood ? handleUpdate : handleCreate;

  // Delete food
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this food item?")) {
      try {
        const token = localStorage.getItem("authToken");
        await axios.delete(`http://localhost:5000/api/foods/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchFoods();
      } catch (error) {
        console.error("Error deleting food:", error);
        if (error.response?.status === 401) {
          logout();
        }
      }
    }
  };

  // Open modal for editing
  const openEditModal = (food) => {
    setEditingFood(food._id);
    setFormData({
      name: food.name,
      type: food.type,
      category: food.category,
      image: food.image,
      rating: food.rating,
      difficulty: food.difficulty,
      healthScore: food.healthScore,
      cookTime: food.cookTime,
      steps: food.steps,
      calories: food.nutrition?.calories || 0,
      carbs: food.nutrition?.carbs || 0,
      proteins: food.nutrition?.proteins || 0,
      fats: food.nutrition?.fats || 0,
    });
    setShowModal(true);
  };

  // Open modal for adding new food
  const openAddModal = () => {
    setEditingFood(null);
    resetForm();
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setEditingFood(null);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      type: "meal",
      category: "",
      image: "",
      rating: 4.0,
      difficulty: "Easy",
      healthScore: 80,
      cookTime: "",
      steps: 1,
      calories: 0,
      carbs: 0,
      proteins: 0,
      fats: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Admin Header with User Info and Logout */}
        {/* <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome, {user?.name || user?.email}
            </p>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div> */}

        <AdminHeader />
        <StatsCards foods={foods} />
        <AddButton onAdd={openAddModal} />
        <FoodsTable
          foods={foods}
          loading={loading}
          onEdit={openEditModal}
          onDelete={handleDelete}
        />
        <FoodModal
          showModal={showModal}
          editingFood={editingFood}
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      </div>
    </div>
  );
}
