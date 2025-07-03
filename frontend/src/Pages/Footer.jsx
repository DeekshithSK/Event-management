import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-16 mx-auto px-10">
      <div className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-5">About Us</h3>
          <p className="text-sm leading-relaxed">
            EventMate is your trusted platform for seamless event management, booking, and sponsorship.
            We strive to connect organizers, vendors, and attendees with ease and efficiency.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/userdashboard" className="hover:underline">User Dashboard</Link></li>
            <li><Link to="/vendordashboard" className="hover:underline">Vendor Dashboard</Link></li>
            <li><Link to="/sponsordashboard" className="hover:underline">Sponsor Dashboard</Link></li>
            <li><Link to="/createevent" className="hover:underline">Create Event</Link></li>
            <li><Link to="/events" className="hover:underline">Browse Events</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:underline">Shipping Information</Link></li>
            <li><Link to="/returns" className="hover:underline">Returns & Exchanges</Link></li>
            <li><Link to="/size-guide" className="hover:underline">Size Guide</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <div className="text-sm space-y-2">
            <p className="flex items-center">
              <MapPin className="mr-2" />
              EventMate Headquarters
              <br />Mangalore, DK 575001
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" />
              +91 98765 43210
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" />
              support@eventmate.com
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center my-6">
        <img src=Sign={} alt="Signature" className="h-16" />
      </div> */}

      <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
        <p>
          &copy; {new Date().getFullYear()} EventMate. All rights reserved.{' '}
          <span className="text-yellow-400">
            {/* Developed by{' '} */}
            {/* <a href="https://vinyasatech.com/" className="underline hover:text-yellow-300">
              VINYASA
            </a> */}
          </span>
        </p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
