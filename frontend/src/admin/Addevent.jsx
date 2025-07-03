import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const AddEventForm = () => {
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
    image: ""
  });

  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Cloudinary image upload handler
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const formDataImg = new FormData();
    formDataImg.append('image', file);

    try {
      const res = await fetch('/api/upload/image', {
        method: 'POST',
        body: formDataImg
      });
      const data = await res.json();
      setImageUrl(data.url);
      setFormData(prev => ({ ...prev, image: data.url }));
    } catch (err) {
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add validation here if needed

    // Prepare event data
    const eventData = {
      ...formData,
      image: imageUrl // Use the Cloudinary URL
    };

    // Send eventData to your backend (replace URL as needed)
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      });
      if (res.ok) {
        alert("Event added successfully!");
        navigate('/viewevent');
      } else {
        alert("Failed to add event");
      }
    } catch (err) {
      alert("Error submitting event");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 ">
      <h2 className="text-2xl font-bold text-center mb-6 text-pink-800">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
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
        <div>
          <label className="block text-sm font-medium text-gray-700">Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Theme(s)</label>
          <input
            type="text"
            name="themes"
            value={formData.themes}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="e.g. Royal, Vintage, Beach"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Capacity</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pricing (₹)</label>
          <input
            type="number"
            name="pricing"
            value={formData.pricing}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            rows={3}
            placeholder="Describe the event..."
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option>Active</option>
            <option>Cancelled</option>
            <option>Completed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
          {uploading && <div className="text-blue-500 mt-2">Uploading image...</div>}
          {imageUrl && (
            <div className="mt-2">
              <img src={imageUrl} alt="Event" className="h-24 rounded" />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-yellow-400 transition"
          disabled={uploading}
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

const AddEventPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 min-h-screen bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600">
        <AddEventForm />
      </div>
    </div>
  );
};

export default AddEventPage;
