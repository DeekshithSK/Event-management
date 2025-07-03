import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const categories = [
  "Music",
  "Technology",
  "Sports",
  "Health",
  "Business",
  "Education",
];

const EditEventForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Parse event id from query params
  const queryParams = new URLSearchParams(location.search);
  const eventId = queryParams.get("id");

  // Sample existing event data - in real app, fetch from API or state
  const existingEvents = [
    {
      id: "1",
      eventName: "Spring Music Festival",
      organizerName: "John Doe",
      category: "Music",
      date: "2024-05-15",
      time: "18:00",
      location: "Central Park",
      description: "An outdoor music festival featuring local bands.",
    },
    {
      id: "2",
      eventName: "Tech Innovators Conference",
      organizerName: "Jane Smith",
      category: "Technology",
      date: "2024-06-20",
      time: "09:00",
      location: "Convention Center",
      description: "A conference showcasing the latest in tech innovation.",
    },
    {
      id: "3",
      eventName: "City Marathon",
      organizerName: "City Sports Club",
      category: "Sports",
      date: "2024-07-10",
      time: "07:00",
      location: "Downtown",
      description: "Annual city marathon open to all participants.",
    },
  ];

  const eventToEdit = existingEvents.find((e) => e.id === eventId) || {
    eventName: "",
    organizerName: "",
    category: "",
    date: "",
    time: "",
    location: "",
    description: "",
  };

  const [formData, setFormData] = useState(eventToEdit);

  useEffect(() => {
    setFormData(eventToEdit);
  }, [eventToEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, submit updated data to backend here
    console.log("Updated Event Data:", formData);
    alert("Event updated successfully!");
    navigate("/Viewevent");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 min-h-screen bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600">
        <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
            Edit Event
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Event Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Name
              </label>
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Organizer Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organizer Name
              </label>
              <input
                type="text"
                name="organizerName"
                value={formData.organizerName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">-- Select Category --</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                rows={3}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Update Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEventForm;
