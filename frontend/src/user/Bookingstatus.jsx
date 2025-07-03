import React, { useState } from 'react';
import Header from '../Pages/Header';

// Dummy booking requests
const bookings = [
  {
    id: 1,
    eventName: 'Summer Music Festival',
    date: '2025-07-20',
    venue: 'Beach Arena',
    package: 'Premium',
    status: 'Pending',
    updates: ['Your request has been received.'],
  },
  {
    id: 2,
    eventName: 'Corporate Gala',
    date: '2025-08-10',
    venue: 'Grand Palace',
    package: 'VIP',
    status: 'Approved',
    updates: ['Booking approved!', 'Coordinator assigned: John Doe'],
  },
];

// Chat messages mock
const initialChats = {
  2: [
    { sender: 'Organizer', message: "Hi, we've finalized your vendor team." },
    { sender: 'You', message: 'Thanks, looking forward to it!' },
  ],
};

const BookingStatus = () => {
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [chats, setChats] = useState(initialChats);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const chatList = chats[selectedBookingId] || [];
    const updatedChats = {
      ...chats,
      [selectedBookingId]: [...chatList, { sender: 'You', message: newMessage }],
    };
    setChats(updatedChats);
    setNewMessage('');
  };

  const selectedBooking = bookings.find((b) => b.id === selectedBookingId);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Booking Status & Tracking</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bookings List */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
            {bookings.map((booking) => (
              <div
                key={booking.id}
                onClick={() => setSelectedBookingId(booking.id)}
                className={`cursor-pointer bg-white p-4 mb-4 rounded shadow border-l-4 ${
                  booking.status === 'Approved'
                    ? 'border-green-500'
                    : booking.status === 'Rejected'
                    ? 'border-red-500'
                    : 'border-yellow-500'
                } hover:bg-blue-50`}
              >
                <h3 className="text-lg font-bold">{booking.eventName}</h3>
                <p className="text-sm text-gray-600">📅 {booking.date} | 📍 {booking.venue}</p>
                <p className="text-sm text-gray-600">Package: {booking.package}</p>
                <p className="mt-1 font-semibold">Status: <span className="capitalize">{booking.status}</span></p>
              </div>
            ))}
          </div>

          {/* Booking Details & Chat */}
          {selectedBooking && (
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">Booking Details</h2>
              <p><strong>Event:</strong> {selectedBooking.eventName}</p>
              <p><strong>Date:</strong> {selectedBooking.date}</p>
              <p><strong>Venue:</strong> {selectedBooking.venue}</p>
              <p><strong>Package:</strong> {selectedBooking.package}</p>
              <p><strong>Status:</strong> {selectedBooking.status}</p>

              {/* Updates */}
              <div className="mt-4">
                <h3 className="font-bold mb-2">Organizer Updates</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {selectedBooking.updates.map((update, index) => (
                    <li key={index}>{update}</li>
                  ))}
                </ul>
              </div>

              {/* Chat Section */}
              <div className="mt-6">
                <h3 className="font-bold mb-2">Chat with Organizer</h3>
                <div className="h-40 overflow-y-auto bg-gray-50 border p-3 rounded space-y-2">
                  {(chats[selectedBooking.id] || []).map((chat, idx) => (
                    <div
                      key={idx}
                      className={`text-sm ${
                        chat.sender === 'You' ? 'text-right text-blue-600' : 'text-left text-gray-700'
                      }`}
                    >
                      <strong>{chat.sender}:</strong> {chat.message}
                    </div>
                  ))}
                </div>

                <div className="flex mt-2 gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow px-3 py-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingStatus;
