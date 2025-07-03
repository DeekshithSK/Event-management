import React, { useState } from "react";
import Sidebar from './Sidebar';

const EditCategoryForm = () => {
  // Initial values can be replaced with props or fetched data later
  const [categoryData, setCategoryData] = useState({
    name: "Corporate Event",
    description: "This is a sample category description.",
  });

  const handleChange = (e) => {
    setCategoryData({
      ...categoryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Category Data:", categoryData);
    // Submit updated categoryData to your backend
    alert("Category updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-pink-800">Edit Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category Name</label>
          <input
            type="text"
            name="name"
            value={categoryData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter category name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={categoryData.description}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            rows={3}
            placeholder="Enter category description"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-yellow-400 transition"
        >
          Update Category
        </button>
      </form>
    </div>
  );
};

const EditCategoryPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 min-h-screen bg-gradient-to-r from-pink-300 to-blue-300">
        <EditCategoryForm />
      </div>
    </div>
  );
};

export default EditCategoryPage;
