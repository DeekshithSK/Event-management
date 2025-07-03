import React from 'react';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  const stats = [
    { title: 'Total Bookings', count: 15, color: 'bg-[linear-gradient(204deg,_rgba(70,11,31,1)_1%,_rgba(18,12,60,1)_40%,_rgba(77,14,77,1)_90%)]' },
    { title: 'Upcoming Events', count: 5, color: 'bg-green-100 text-green-800' },
    { title: 'Pending Requests', count: 3, color: 'bg-yellow-100 text-yellow-800' },
  ];

  const quickLinks = [
    { name: 'Manage Services', path: '/vendor/services' },
    { name: 'View Booking Requests', path: '/vendor/requests' },
    { name: 'Calendar', path: '/vendor/calendar' },
    { name: 'Edit Profile', path: '/vendor/profile' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Vendor Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-xl shadow ${stat.color}`}>
            <h2 className="text-sm font-semibold">{stat.title}</h2>
            <p className="text-3xl font-bold">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="bg-indigo-600 text-white px-4 py-2 text-center rounded hover:bg-indigo-700 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mini Calendar (Placeholder) */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Upcoming Events Calendar</h2>
        <div className="text-gray-600 italic">📅 Calendar integration will go here</div>
      </div>
    </div>
  );
};

export default VendorDashboard;
  