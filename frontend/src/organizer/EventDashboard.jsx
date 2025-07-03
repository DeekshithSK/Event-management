import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const analyticsData = [
  { month: "Jan", bookings: 20, attendance: 150, revenue: 50000 },
  { month: "Feb", bookings: 30, attendance: 180, revenue: 65000 },
  { month: "Mar", bookings: 25, attendance: 200, revenue: 72000 },
  { month: "Apr", bookings: 40, attendance: 250, revenue: 90000 },
];

const recentEvents = [
  { id: 1, name: "Wedding Fest", date: "2025-06-05", venue: "Grand Hall" },
  { id: 2, name: "Corporate Meetup", date: "2025-06-01", venue: "BizHub" },
];

const upcomingEvents = [
  { id: 3, name: "Fashion Show", date: "2025-06-20", status: "Scheduled" },
  { id: 4, name: "Music Fest", date: "2025-07-05", status: "Scheduled" },
];

const EventDashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Event Organizer Dashboard</h1>

      {/* Quick Links */}
      <div className="mb-6 flex flex-wrap gap-4">
        <Link
          to="/organizer/events/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Create Event
        </Link>
        <Link
          to="/organizer/events"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          📋 Manage Events
        </Link>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Bookings Line Chart */}
        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Bookings Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={analyticsData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke="#3182CE" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Bar Chart */}
        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Monthly Revenue (₹)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={analyticsData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#38A169" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-8 bg-white shadow p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
        <ul className="space-y-2">
          {upcomingEvents.map((event) => (
            <li key={event.id} className="flex justify-between border-b py-2">
              <div>
                <p className="font-medium">{event.name}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
              <span className="text-sm text-green-700 bg-green-100 px-2 py-1 rounded">
                {event.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Events Table */}
      <div className="bg-white shadow p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-3">Recent Events</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Venue</th>
            </tr>
          </thead>
          <tbody>
            {recentEvents.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="p-2">{event.name}</td>
                <td className="p-2">{event.date}</td>
                <td className="p-2">{event.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventDashboard;
