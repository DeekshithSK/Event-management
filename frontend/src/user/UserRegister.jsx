import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Pages/Header";

const UserRegistrationForm = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("User Registered:", { ...formData, role });
    navigate("/UserLogin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-yellow-200 to-yellow-500 p-6 rounded shadow-md w-full max-w-md text-gray-700"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
            Registration
          </h2>
          
          {/* Role Selection */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Role</label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>

          {/* Organizer Fields */}
          {role === "organizer" && (
            <>
              <div className="mb-4">
                <label className="block font-medium mb-1">Event Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                >
                  <option value="">-- Select Category --</option>
                  <option value="conference">Corporate Event</option>
                  <option value="wedding">Social Events</option>
                  <option value="concert">Educational Events</option>
                  <option value="exhibition">Cultural Events</option>
                  <option value="sports">Sports Events</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1">Event Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  rows="3"
                  required
                />
              </div>
            </>
          )}

          {/* Vendor Fields */}
          {role === "vendor" && (
            <>
              <div className="mb-4">
                <label className="block font-medium mb-1">Service Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="catering">Catering</option>
                  <option value="photography">Photography</option>
                  <option value="decoration">Decoration</option>
                  <option value="logistics">Logistics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1">Description / Bio</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  rows="4"
                  required
                />
              </div>
            </>
          )}

          {/* Name */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
