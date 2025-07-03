import React, { useState } from 'react';

const initialEvents = [
  {
    id: 1,
    title: 'Summer Music Festival',
    organizer: 'John Doe',
    date: '2025-07-20',
    location: 'Central Park',
    status: 'Pending',
    description: 'A great outdoor music festival featuring multiple bands.',
  },
  {
    id: 2,
    title: 'Tech Conference 2025',
    organizer: 'Tech Corp',
    date: '2025-08-15',
    location: 'Convention Center',
    status: 'Pending',
    description: 'Annual conference focusing on the latest in technology.',
  },
  {
    id: 3,
    title: 'Art Exhibition',
    organizer: 'Gallery XYZ',
    date: '2025-09-01',
    location: 'Downtown Gallery',
    status: 'Approved',
    description: 'Exhibition of modern art from emerging artists.',
  },
];

const EventVerification = () => {
  const [events, setEvents] = useState(initialEvents);

  const handleApproval = (id, newStatus) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, status: newStatus } : event
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Event Verification</h1>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.status === 'Approved'
                    ? 'bg-green-200 text-green-800'
                    : event.status === 'Rejected'
                    ? 'bg-red-200 text-red-800'
                    : 'bg-yellow-200 text-yellow-800'
                }`}
              >
                {event.status}
              </span>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Organizer:</strong> {event.organizer}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="text-gray-700 mb-4">{event.description}</p>

            {event.status === 'Pending' && (
              <div className="space-x-3">
                <button
                  onClick={() => handleApproval(event.id, 'Approved')}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleApproval(event.id, 'Rejected')}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}

        {events.every((event) => event.status !== 'Pending') && (
          <p className="text-center text-gray-500">No pending events for approval.</p>
        )}
      </div>
    </div>
  );
};

export default EventVerification;
