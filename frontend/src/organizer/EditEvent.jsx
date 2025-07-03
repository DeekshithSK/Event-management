import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditEvent = () => {
  const { eventId } = useParams();

  // Simulated fetched event data (you can replace with an API call)
  const dummyEvent = {
    id: eventId,
    name: "Wedding Bliss",
    type: "Wedding",
    venue: "Royal Palace",
    date: "2025-07-15",
    themes: "Royal, Classic",
    capacity: 200,
    pricing: 50000,
    description: "A luxurious royal-themed wedding.",
    status: "Active",
  };

  const [formData, setFormData] = useState({ ...dummyEvent });

  useEffect(() => {
    // Simulate fetching data
    // fetch(`/api/events/${eventId}`).then(...) in real project
    setFormData({ ...dummyEvent });
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Event:", formData);
    // TODO: Replace with PUT/PATCH request to backend
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Edit Event</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
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

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
