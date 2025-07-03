import React, { useState } from 'react';
import Sidebar from './Sidebar';

const initialVendors = [
  {
    id: 1,
    name: 'Royal Caterers',
    email: 'vendor1@example.com',
    phone: '9876543210',
    category: 'Catering',
    description: 'We provide premium catering services for all occasions.',
    status: 'Approved',
  },
  {
    id: 2,
    name: 'Lights & Sound Co.',
    email: 'vendor2@example.com',
    phone: '1234567890',
    category: 'Decoration',
    description: 'Experts in lighting and sound for events.',
    status: 'Rejected',
  },
  {
    id: 3,
    name: 'Photo Magic',
    email: 'vendor3@example.com',
    phone: '5551234567',
    category: 'Photography',
    description: 'Capturing your moments beautifully.',
    status: 'Approved',
  },
];

const VendorManagement = () => {
  const [vendors, setVendors] = useState(initialVendors);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleStatus = (id) => {
    const updated = vendors.map((vendor) =>
      vendor.id === id
        ? { ...vendor, status: vendor.status === 'Approved' ? 'Rejected' : 'Approved' }
        : vendor
    );
    setVendors(updated);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this vendor?')) {
      setVendors(vendors.filter((vendor) => vendor.id !== id));
    }
  };

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100  bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Vendors</h1>

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
                  <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Phone</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Description</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredVendors.length > 0 ? (
                  filteredVendors.map((vendor) => (
                    <tr key={vendor.id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-4 py-3">{vendor.name}</td>
                      <td className="px-4 py-3">{vendor.email}</td>
                      <td className="px-4 py-3">{vendor.phone}</td>
                      <td className="px-4 py-3">{vendor.category}</td>
                      <td className="px-4 py-3">{vendor.description}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            vendor.status === 'Approved'
                              ? 'bg-green-200 text-green-800'
                              : 'bg-red-200 text-red-800'
                          }`}
                        >
                          {vendor.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center space-x-2">
                        <button
                          onClick={() => handleToggleStatus(vendor.id)}
                          className={`px-3 py-1 text-sm rounded font-semibold text-white transition-colors duration-200 ${
                            vendor.status === 'Approved'
                              ? 'bg-yellow-500 hover:bg-yellow-600'
                              : 'bg-green-500 hover:bg-green-600'
                          }`}
                        >
                          {vendor.status === 'Approved' ? 'Reject' : 'Approve'}
                        </button>
                        <button
                          onClick={() => handleDelete(vendor.id)}
                          className="px-3 py-1 text-sm rounded font-semibold bg-red-500 hover:bg-red-600 text-white transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center text-gray-500 py-5">
                      No vendors found.
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

export default VendorManagement;
