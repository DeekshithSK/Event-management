import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer"
import Header from "../Pages/Header";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-[url('/wedding.jpg')]">
      {/* Main Body */}
      <main className="flex-grow">
        {/* Header */}
        <Header />

       

       
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4 bg-opacity-40">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Celebrate Love With Events
            </h1>
          </div>

          {/* <p className="mt-4 text-lg md:text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Turning Your Special Day into a Beautiful Memory
          </p> */}

          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500">
            Explore Packages
          </button>
        </section>
      </main>

      {/* What We Offer Section(bg-gray-900 */}
      <section className="bg-gray-900 text-yellow-300 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm italic mb-2">What We Offer</p>
          <h2 className="text-3xl font-bold mb-10">What we offer of Clients</h2>
          <div className="flex justify-center space-x-8">
            <img
              src="/image.jpg"
              alt="Offer 1"
              className="w-48 h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/wedding1.jpg"
              alt="Offer 2"
              className="w-48 h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/image2.jpg"
              alt="Offer 3"
              className="w-48 h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

<div className="mt-16">
   {/* Footer */} 
      <Footer />
</div>
     
    </div>
  );
};

export default LandingPage;
