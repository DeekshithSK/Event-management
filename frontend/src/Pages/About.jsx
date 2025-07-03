import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/image.jpg",
      description: "Passionate about creating unforgettable experiences"
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "/image2.jpg", 
      description: "Bringing artistic vision to every event"
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      image: "/wedding1.jpg",
      description: "Ensuring flawless execution of every detail"
    },
    {
      name: "David Thompson",
      role: "Technical Lead",
      image: "/sign.jpg",
      description: "Innovating event management technology"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for perfection in every event we manage"
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building lasting relationships with our clients"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Constantly evolving with new trends and technologies"
    },
    {
      icon: "❤️",
      title: "Passion",
      description: "Love for creating magical moments"
    }
  ];

  const stats = [
    { number: "500+", label: "Events Managed" },
    { number: "1000+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white py-16"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About EventMate
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            We're passionate about turning your dreams into reality, one event at a time
          </p>
          {/* <div className="flex justify-center space-x-4">
            <Link 
              to="/event" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
            >
              Explore Events
            </Link>
            <Link 
              to="/UserRegister" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Started
            </Link>
          </div> */}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, EventMate began with a simple vision: to make event planning 
                accessible, enjoyable, and stress-free for everyone. What started as a small 
                team of passionate event enthusiasts has grown into a comprehensive platform 
                that connects clients with the best organizers, vendors, and venues.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every event, whether it's a wedding, corporate gathering, 
                or birthday celebration, deserves to be extraordinary. Our mission is to 
                provide innovative solutions that transform the way people plan and experience events.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have helped thousands of clients create unforgettable 
                memories and continue to innovate in the event management industry.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/img1.jpg" 
                alt="Our Story" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Events Successfully Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experiences we create
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind EventMate who make your dreams come true
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose EventMate?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Platform</h3>
                    <p className="text-gray-600">Everything you need in one place - from event planning to vendor management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Verified Vendors</h3>
                    <p className="text-gray-600">All our vendors are carefully screened and verified for quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock customer support to help you every step of the way</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Customizable Packages</h3>
                    <p className="text-gray-600">Tailored solutions to fit your budget and requirements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img2.jpg" 
                alt="Why Choose Us" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Perfect Event?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of satisfied clients who have trusted EventMate with their special moments
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/UserRegister" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/event" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
