import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    eventName: "Spring Music Festival",
    organizerName: "John Doe",
    category: "Music",
    date: "2024-05-15",
    time: "18:00",
    location: "Central Park",
    description: "An outdoor music festival featuring local bands.",
  },
  {
    id: 2,
    eventName: "Tech Innovators Conference",
    organizerName: "Jane Smith",
    category: "Technology",
    date: "2024-06-20",
    time: "09:00",
    location: "Convention Center",
    description: "A conference showcasing the latest in tech innovation.",
  },
  {
    id: 3,
    eventName: "City Marathon",
    organizerName: "City Sports Club",
    category: "Sports",
    date: "2024-07-10",
    time: "07:00",
    location: "Downtown",
    description: "Annual city marathon open to all participants.",
  },
];

const ViewEvent = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 min-h-screen bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600">
        <h2 className="text-2xl font-bold mb-6 text-pink-800">View Events</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {event.eventName}
              </h3>
              <p>
                <strong>Organizer Name:</strong> {event.organizerName}
              </p>
              <p>
                <strong>Category:</strong> {event.category}
              </p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p className="mb-4">
                <strong>Description:</strong> {event.description}
              </p>
              <Link
  to={`/Editevents?id=${event.id}`}
  className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-yellow-400 transition duration-200 font-semibold"
>
  Edit
</Link>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewEvent;
