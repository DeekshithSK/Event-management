import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // No backend logic, just show a thank you message
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center py-12 px-4">
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 mt-8 mb-8">
          <h1 className="text-4xl font-bold text-center text-purple-700 mb-2">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8">We'd love to hear from you! Fill out the form below or reach us directly.</p>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6 flex flex-col justify-center">
              <div className="flex items-center space-x-4">
                <MapPin className="text-purple-600" />
                <span className="text-gray-700">EventMate Headquarters<br />Mangalore, DK 575001</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-purple-600" />
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-purple-600" />
                <span className="text-gray-700">support@eventmate.com</span>
              </div>
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-2">Business Hours</h2>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
            {/* Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                Send Message
              </button>
              {submitted && (
                <div className="text-green-600 text-center font-semibold mt-2">Thank you for contacting us! We'll get back to you soon.</div>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
