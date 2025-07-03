import React, { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    venue: "",
    date: "",
    themes: "",
    capacity: "",
    pricing: "",
    description: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", formData);
    // You can send this to backend via Axios/Fetch here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Create New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Event Name */}
        <div>
          <label className="block font-medium mb-1">Event Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block font-medium mb-1">Event Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select Type</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate</option>
            <option>Festival</option>
            <option>Other</option>
          </select>
        </div>

        {/* Venue */}
        <div>
          <label className="block font-medium mb-1">Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block font-medium mb-1">Event Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Themes */}
        <div>
          <label className="block font-medium mb-1">Theme(s)</label>
          <input
            type="text"
            name="themes"
            value={formData.themes}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Royal, Vintage, Beach"
          />
        </div>

        {/* Capacity */}
        <div>
          <label className="block font-medium mb-1">Capacity</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Pricing */}
        <div>
          <label className="block font-medium mb-1">Pricing (₹)</label>
          <input
            type="number"
            name="pricing"
            value={formData.pricing}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows="4"
            placeholder="Describe the event..."
          ></textarea>
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option>Active</option>
            <option>Cancelled</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
