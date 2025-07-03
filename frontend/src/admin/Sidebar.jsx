import React, { useState } from 'react';
import {
  Home,
  Calendar,
  User,
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);

  return (
    <div className="min-h-screen w-64 bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600 text-white flex flex-col p-4 space-y-6 overflow-y-auto">
      <a href="/Dashboard" className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold text-center border-b pb-4 ">Dashboard</h1>
      </a>

      <nav className="flex flex-col space-y-4">
        {/* Add Category Dropdown */}
        <div>
          <div
            onClick={() => setCategoryDropdown(!categoryDropdown)}
            className="flex items-center justify-between cursor-pointer hover:text-yellow-400 flex items-center gap-2 px-4 py-2 rounded-xl text-white cursor-pointer transition duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 hover:shadow-md"
          >
            <div className="flex items-center space-x-2">
              <Home size={20} />
              <span>Category</span>
            </div>
            {categoryDropdown ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {categoryDropdown && (
            <div className="ml-8 mt-2 flex flex-col space-y-2 text-sm ">
             
              <a href="/Addcategory" className="hover:text-yellow-300">Add Category</a>
              <a href="/Viewcategory" className="hover:text-yellow-300">View Category</a>
            </div>
          )}
        </div>

        {/* Add Event Dropdown */}
        <div>
          <div
            onClick={() => setEventDropdown(!eventDropdown)}
            className="flex items-center justify-between cursor-pointer hover:text-yellow-400 flex items-center gap-2 px-4 py-2 rounded-xl text-white cursor-pointer transition duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 hover:shadow-md"
          >
            <div className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>Event</span>
            </div>
            {eventDropdown ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>

          {eventDropdown && (
            <div className="ml-8 mt-2 flex flex-col space-y-2 text-sm">
              <a href="/AddEvent" className="hover:text-yellow-300">Add Event</a>
              <a href="/ViewEvent" className="hover:text-yellow-300">View Event</a>
            </div>
          )}
        </div>

        {/* Direct Links */}
        <a href="/ManageUser" className="flex items-center space-x-2 px-4 py-2 rounded-xl text-white cursor-pointer transition duration-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 hover:shadow-md">
          <User size={20} /><span>Manage User</span>
        </a>

        <a href="/VendorManagement" className="flex items-center space-x-2 px-4 py-2 rounded-xl text-white cursor-pointer transition duration-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 hover:shadow-md">
          <User size={20} /><span>Manage Vendor</span>
        </a>

        <a href="/ManageOrganizer" className="flex items-center space-x-2 px-4 py-2 rounded-xl text-white cursor-pointer transition duration-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 hover:shadow-md">
          <User size={20} /><span>Manage Organizer</span>
        </a>

        <a href="#" className="flex items-center space-x-2 px-4 py-2 rounded-xl text-white cursor-pointer transition duration-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 hover:shadow-md">
          <Settings size={20} /><span>Logout</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
