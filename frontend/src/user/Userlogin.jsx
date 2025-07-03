import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Pages/Header";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Dummy login check (you can replace this with an API call)
    if (email === "test@example.com" && password === "123456") {
      console.log("Login successful");
      navigate("/Event"); // ✅ Navigate to Event page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('/image.jpg')]">
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-500 p-6 rounded shadow-md w-full max-w-md text-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="inline-block border border-gray-500 px-3 py-1 rounded">
              Login
            </span>
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
