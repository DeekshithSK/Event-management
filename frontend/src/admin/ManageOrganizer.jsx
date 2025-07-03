import React, { useState } from 'react';

const dummyOrganizers = [
  { id: 1, name: 'Evelyn Parker', email: 'evelyn@example.com', status: 'Active' },
  { id: 2, name: 'Franklin Morris', email: 'franklin@example.com', status: 'Disabled' },
  { id: 3, name: 'Grace Lee', email: 'grace@example.com', status: 'Active' },
  { id: 4, name: 'Hannah Kim', email: 'hannah@example.com', status: 'Active' },
];

import Sidebar from './Sidebar';

const ManageOrganizer = () => {
  const [organizers, setOrganizers] = useState(dummyOrganizers);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleStatus = (id) => {
    const updated = organizers.map((org) =>
      org.id === id
        ? { ...org, status: org.status === 'Active' ? 'Disabled' : 'Active' }
        : org
    );
    setOrganizers(updated);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this organizer?")) {
      setOrganizers(organizers.filter((org) => org.id !== id));
    }
  };

  const filteredOrganizers = organizers.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100  bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md to-blue-500 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Organizers</h1>

          {/* Search */}  
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse rounded-lg overflow-hidden">
              <thead className="bg-green-100 text-green-800">
                <tr>
                  <th className="px-4 py-3 text-middle text-sm font-medium">Name</th>
                  <th className="px-4 py-3 text-middle text-sm font-medium">Email</th>
                  <th className="px-4 py-3 text-middle text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrganizers.length > 0 ? (
                  filteredOrganizers.map((org) => (
                    <tr key={org.id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-4 py-3">{org.name}</td>
                      <td className="px-4 py-3">{org.email}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            org.status === 'Active'
                              ? 'bg-green-200 text-green-800'
                              : 'bg-red-200 text-red-800'
                          }`}
                        >
                          {org.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center space-x-2">
                        <button
                          onClick={() => handleToggleStatus(org.id)}
                          className={`px-3 py-1 text-sm rounded font-medium text-white transition ${
                            org.status === 'Active'
                              ? 'bg-yellow-500 hover:bg-yellow-600'
                              : 'bg-green-500 hover:bg-green-600'
                          }`}
                        >
                          {org.status === 'Active' ? 'Disable' : 'Enable'}
                        </button>
                        <button
                          onClick={() => handleDelete(org.id)}
                          className="px-3 py-1 text-sm rounded bg-red-500 hover:bg-red-600 text-white font-medium transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500 py-5">
                      No organizers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrganizer;
