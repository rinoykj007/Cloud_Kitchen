import React from "react";

const AddButton = ({ onAdd }) => {
  return (
    <div className="mb-6">
      <button
        onClick={onAdd}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Add New Food Item
      </button>
    </div>
  );
};

export default AddButton;
