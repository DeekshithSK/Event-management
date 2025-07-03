import React, { useState } from "react";
import Sidebar from './Sidebar';
import { useNavigate } from "react-router-dom";

const AddCategoryForm = () => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCategoryData({
      ...categoryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category Data:", categoryData);
    // Submit categoryData to your backend
    // alert("Category added successfully!");
    navigate('/viewcategory');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 ">
      <h2 className="text-2xl font-bold text-center mb-6 text-pink-800">Add New Category</h2>
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
          Add Category
        </button>
      </form>
    </div>
  );
};

const AddCategoryPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 min-h-screen bg-gray-100 bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600">
        <AddCategoryForm />
      </div>
    </div>
  );
};

export default AddCategoryPage;
