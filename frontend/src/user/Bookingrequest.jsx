import React, { useState } from "react";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";

const BookingRequests = [
  {
    id: 1,
    eventName: "Wedding Gala",
    date: "2024-07-15",
    status: "Pending",
  },
  {
    id: 2,
    eventName: "Corporate Meetup",
    date: "2024-08-01",
    status: "Confirmed",
  },
  // Add more mock requests as needed
];

const Bookingrequest = () => {
  const [requests] = useState(BookingRequests);

  return (
    <>
      <Header />
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md border mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">My Booking Requests</h2>
        {requests.length === 0 ? (
          <div className="text-gray-500">You have no booking requests.</div>
        ) : (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Event Name</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td className="py-2 px-4 border-b">{req.eventName}</td>
                  <td className="py-2 px-4 border-b">{req.date}</td>
                  <td className="py-2 px-4 border-b">{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Bookingrequest;
