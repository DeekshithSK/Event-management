import React, { useState, useEffect } from 'react';
import Footer from "../Pages/Footer";
import { Link } from 'react-router-dom';
import Header from '../Pages/Header';


const initialEvents = [
  {
    id: 1,
    name: 'Summer Music Festival',
    // date: '2025-07-20',
    venue: 'Beach Arena',
    // theme: 'Music',
    category: 'Festival',
    price: 500,
    image: '/wedding.jpg',
    description: 'Experience the ultimate summer vibes with live music, food, and entertainment.',
    organizer: 'Music Events Co.',
    attendees: 1200
  },
  {
    id: 2,
    name: 'Tech Conference 2025',
    // date: '2025-08-05',
    venue: 'City Convention Center',
    // theme: 'Technology',
    category: 'Conference',
    price: 1200,
    image: '/image.jpg',
    description: 'Join industry leaders for cutting-edge tech discussions and networking.',
    organizer: 'Tech Innovators',
    attendees: 800
  },
  {
    id: 3,
    name: 'Art & Culture Expo',
    // date: '2025-09-12',
    venue: 'Art Gallery Hall',
    // theme: 'Culture',
    category: 'Exhibition',
    price: 300,
    image: '/image2.jpg',
    description: 'Discover amazing artworks and cultural performances from around the world.',
    organizer: 'Cultural Society',
    attendees: 500
  },
  {
    id: 4,
    name: 'Wedding Bliss 2025',
    // date: '2025-10-15',
    venue: 'Grand Palace Hotel',
    // theme: 'Wedding',
    category: 'Celebration',
    price: 2500,
    image: '/wedding1.jpg',
    description: 'Your dream wedding venue with luxury amenities and professional services.',
    organizer: 'Wedding Planners Pro',
    attendees: 200
  },
  {
    id: 5,
    name: 'Corporate Summit',
    // date: '2025-11-08',
    venue: 'Business Center',
    // theme: 'Business',
    category: 'Conference',
    price: 800,
    image: '/sign.jpg',
    description: 'Annual corporate gathering with keynote speakers and business networking.',
    organizer: 'Business Events Ltd',
    attendees: 600
  },
  {
    id: 6,
    name: 'Food & Wine Festival',
    // date: '2025-12-03',
    venue: 'Riverside Gardens',
    // theme: 'Food',
    category: 'Festival',
    price: 400,
    image: '/Roses and lights creating a magical entrance….jpeg',
    description: 'Savor the finest cuisines and wines from top chefs and wineries.',
    organizer: 'Culinary Arts',
    attendees: 900
  }
];

const Events = () => {
  const [search, setSearch] = useState('');
  const [venueFilter, setVenueFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [viewMode, setViewMode] = useState('grid');

  
  const categories = [...new Set(initialEvents.map(e => e.category))];

  useEffect(() => {
    let filtered = initialEvents.filter((e) => {
      const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase()) || 
                           e.theme.toLowerCase().includes(search.toLowerCase()) ||
                           e.description.toLowerCase().includes(search.toLowerCase());
      const matchesVenue = venueFilter === '' || e.venue === venueFilter;
      const matchesCategory = categoryFilter === '' || e.category === categoryFilter;
      const matchesPrice = priceFilter === '' || 
                          (priceFilter === 'low' && e.price <= 500) ||
                          (priceFilter === 'medium' && e.price > 500 && e.price <= 1000) ||
                          (priceFilter === 'high' && e.price > 1000);
      
      return matchesSearch && matchesVenue && matchesCategory && matchesPrice;
    });
    setFilteredEvents(filtered);
  }, [search, venueFilter, categoryFilter, priceFilter]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <Header />

      

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Your Perfect Event
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            From intimate gatherings to grand celebrations, find the event that matches your vision
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Browse Events
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Create Event
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Events</label>
              <input
                type="text"
                placeholder="Search by name, theme, or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

           
            <div className="w-full lg:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="w-full lg:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Prices</option>
                <option value="low">Under ₹500</option>
                <option value="medium">₹500 - ₹1000</option>
                <option value="high">Over ₹1000</option>
              </select>
            </div>
          </div>
        </div>

        {/* View Toggle and Results Count */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            Showing {filteredEvents.length} of {initialEvents.length} events
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Event Cards */}
        {filteredEvents.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
          }>
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`${viewMode === 'list' ? 'w-1/3' : ''}`}>
                  <img
                    src={event.image}
                    alt={event.name}
                    className={`w-full h-48 object-cover rounded-t-2xl ${viewMode === 'list' ? 'rounded-l-2xl rounded-tr-none' : ''}`}
                  />
                </div>
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                      {event.category}
                    </span>
                    <span className="text-2xl font-bold text-purple-600">₹{event.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {event.venue}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                      {event.attendees} attendees
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">by {event.organizer}</span>
                    <Link to={`/EventDetails?id=${event.id}`} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-16">
   {/* Footer */} 
      <Footer />
</div>
    </div>
  );
};

export default Events;
