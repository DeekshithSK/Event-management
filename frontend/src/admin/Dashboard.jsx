import React, { useState } from 'react';


 import Header from './Header';
 import Sidebar from './Sidebar';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const stats = [
    { title: 'Total Users', value: 1240 },
    { title: 'Total Events', value: 320 },
    { title: 'Vendors', value: 85 },
    { title: 'Sponsors', value: 45 },
    { title: 'Pending Approvals', value: 18 },
  ];

  

  return (
    <div className="flex min-h-screen bg-gray-100 bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600">
      {sidebarOpen && <Sidebar />}
      <div className="flex-1 p-6">
        <Header onMenuClick={toggleSidebar} />
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 ">
  {stats.map((item, index) => (
    <div
      key={index}
      className="bg-gray p-6 rounded-xl shadow hover:shadow-md transition bg-white/30 backdrop-blur-md rounded-lg "
    >
      <h2 className="text-gray-600 text-sm">{item.title}</h2>
      <p className="text-2xl font-semibold text-blue-600">{item.value}</p>
    </div>
  ))}
</div>


        {/* Chart Section */}
        {/*  */}
      </div>
    </div>
  );
};

export default AdminDashboard;
