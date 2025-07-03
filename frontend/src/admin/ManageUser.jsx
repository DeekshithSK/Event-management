import React, { useState } from 'react';
import Sidebar from './Sidebar';

const dummyUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'User', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Organizer', status: 'Disabled' },
  { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Vendor', status: 'Active' },
  { id: 4, name: 'Diana Lee', email: 'diana@example.com', role: 'Sponsor', status: 'Active' },
];

// Dummy events data keyed by user id
const dummyEventsByUser = {
  1: [
    { id: 101, name: 'Spring Festival', date: '2024-04-15', location: 'Central Park', status: 'Upcoming' },
    { id: 102, name: 'Music Concert', date: '2024-05-20', location: 'City Hall', status: 'Upcoming' },
  ],
  2: [
    { id: 201, name: 'Tech Expo', date: '2024-06-10', location: 'Convention Center', status: 'Upcoming' },
  ],
  3: [
    { id: 301, name: 'Food Fair', date: '2024-07-05', location: 'Downtown Plaza', status: 'Upcoming' },
    { id: 302, name: 'Art Exhibition', date: '2024-08-12', location: 'Art Gallery', status: 'Upcoming' },
  ],
  4: [],
};

const ManageUsers = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserEvents, setSelectedUserEvents] = useState([]);

  const handleRoleChange = (id, newRole) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
  };

  const handleToggleStatus = (id) => {
    const updatedUsers = users.map(user =>
      user.id === id
        ? { ...user, status: user.status === 'Active' ? 'Disabled' : 'Active' }
        : user
    );
    setUsers(updatedUsers);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
      if (selectedUserId === id) {
        setSelectedUserId(null);
        setSelectedUserEvents([]);
      }
    }
  };

  const handleShowEvents = (id) => {
    setSelectedUserId(id);
    setSelectedUserEvents(dummyEventsByUser[id] || []);
  };

  const handleClearSelection = () => {
    setSelectedUserId(null);
    setSelectedUserEvents([]);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100  bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name..."
          className="mb-4 p-2 border rounded-md w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Users Table */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white rounded-xl shadow">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="py-2 px-4 text-middle">Name</th>
                <th className="py-2 px-4 text-middle">Email</th>
                <th className="py-2 px-4 text-middle">Status</th>
                <th className="py-2 px-4 text-middle">Actions</th>
                <th className="py-2 px-4 text-middle">Events</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-center space-x-2">
                    <button
                      onClick={() => handleToggleStatus(user.id)}
                      className="text-sm bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      {user.status === 'Active' ? 'Disable' : 'Enable'}
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => handleShowEvents(user.id)}
                      className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Show Events
                    </button>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Selected User Events Table */}
        {selectedUserId && (
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Events for {users.find(u => u.id === selectedUserId)?.name}
              </h2>
              <button
                onClick={handleClearSelection}
                className="text-sm bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
            {selectedUserEvents.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow">
                  <thead className="bg-green-100 text-green-800">
                    <tr>
                      <th className="py-2 px-4 text-left">Event Name</th>
                      <th className="py-2 px-4 text-left">Date</th>
                      <th className="py-2 px-4 text-left">Location</th>
                      <th className="py-2 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUserEvents.map(event => (
                      <tr key={event.id} className="border-t hover:bg-gray-50">
                        <td className="py-2 px-4">{event.name}</td>
                        <td className="py-2 px-4">{event.date}</td>
                        <td className="py-2 px-4">{event.location}</td>
                        <td className="py-2 px-4">{event.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No events found for this user.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
