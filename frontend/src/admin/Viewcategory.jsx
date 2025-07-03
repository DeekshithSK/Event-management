import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Wedding", description: "Events related to weddings" },
  { id: 2, name: "Birthday", description: "Birthday party events" },
  { id: 3, name: "Conference", description: "Business and professional conferences" },
];

const ViewCategory = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 min-h-screen bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600">
        <h2 className="text-2xl font-bold mb-6 text-pink-800">View Categories</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-pink-600 text-white">
            <tr>
              <th className="py-3 px-6 text-middle">Category Name</th>
              <th className="py-3 px-6 text-middle">Description</th>
              <th className="py-3 px-6 text-middle">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{category.name}</td>
                <td className="py-3 px-6">{category.description}</td>
                <td className="py-3 px-6">
                  <Link
                    to={`/Editcategory?id=${category.id}`}
                    className="text-pink-600 hover:text-yellow-400 font-semibold"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCategory;
