import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';

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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const EventDetails = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const eventId = parseInt(query.get('id'));
  const event = initialEvents.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <Header />
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Event Not Found</h2>
          <button onClick={() => navigate(-1)} className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">Go Back</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex flex-col">
      <Header />
      <div className="flex-1 flex justify-center items-center py-12">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 flex flex-col md:flex-row gap-8">
          <img src={event.image} alt={event.name} className="w-full md:w-1/2 h-80 object-cover rounded-2xl" />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-2">{event.name}</h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2 mb-4">
                <div><span className="font-semibold">Venue:</span> {event.venue}</div>
                <div><span className="font-semibold">Category:</span> {event.category}</div>
                <div><span className="font-semibold">Price:</span> ₹{event.price}</div>
                <div><span className="font-semibold">Organizer:</span> {event.organizer}</div>
                <div><span className="font-semibold">Attendees:</span> {event.attendees}</div>
                {/* Uncomment if date and theme are available */}
                {/* <div><span className="font-semibold">Date:</span> {event.date}</div> */}
                {/* <div><span className="font-semibold">Theme:</span> {event.theme}</div> */}
              </div>
              <button onClick={() => navigate('/Bookingrequest')} className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
