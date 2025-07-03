import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('/image.jpg')]">
      {/* style={{ backgroundImage: "url('/image.jpg')" }} */}
      <div className="bg-gradient-to-r from-yellow-200 to-yellow-500 p-6 rounded shadow-md w-full max-w-md text-white">

        <h2 className="text-2xl font-bold mb-6 text-center"><span className="inline-block border border-gray-500 px-3 py-1 rounded">
    Admin Login
  </span></h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded" />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input type="password" className="w-full border border-gray-300 px-3 py-2 rounded" />
          </div>
          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
