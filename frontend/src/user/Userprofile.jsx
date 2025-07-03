import React, { useState } from 'react';
import Header from '../Pages/Header';

const UserProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: 'xyz',
    email: 'xyz@example.com',
    phone: '9876543210',
    notifications: true,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', formData);
    alert('Profile updated successfully!');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      console.log('Password changed:', formData.newPassword);
      alert('Password changed successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded mt-6">
        <h2 className="text-2xl font-bold mb-6">User Profile & Settings</h2>

        {/* Profile Form */}
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded"
                type="text"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded"
                type="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded"
                type="text"
              />
            </div>
            <div className="flex items-center mt-6">
              <input
                name="notifications"
                type="checkbox"
                checked={formData.notifications}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600"
              />
              <label className="ml-2 text-sm text-gray-700">
                Enable Email Notifications
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>

        {/* Divider */}
        <hr className="my-8" />

        {/* Change Password */}
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <h3 className="text-xl font-semibold">Change Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded"
                type="password"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded"
                type="password"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded"
                type="password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileSettings;
