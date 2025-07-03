import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import viteLogo from '/vite.svg'
import "./App.css";

import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Dashboard from "./admin/Dashboard";
// import Header from "./admin/Header";
import Sidebar from "./admin/Sidebar";
import Addcategory from "./admin/Addcategory";
import Addevent from "./admin/Addevent";
import Eventverification from "./admin/EventVerification";
import ManageUser from "./admin/ManageUser";
import VendorManagement from "./admin/VendorManagement";
import ManageOrganizer from "./admin/ManageOrganizer";
import Editevents from "./admin/Editevents";
import Login from "./admin/Login";
import Editcategory from "./admin/Editcategory";
import Viewcategory from "./admin/Viewcategory";
import Viewevent from "./admin/Viewevent";

import EditEvent from "./organizer/EditEvent";
import EventDashboard from "./organizer/EventDashboard";
import EventManager from "./organizer/EventManager";
import OrganizerEvent from "./organizer/OrganizerEvent";
import OrganizerRegister from "./organizer/OrganizerRegister";

import Bookingrequest from "./user/Bookingrequest";
import Bookingstatus from "./user/Bookingstatus";
import Event from "./user/Event";
import EventDetails from "./user/EventDetails";
import UserRegister from "./user/UserRegister"
import Userlogin from "./user/Userlogin"
import Userprofile from "./user/Userprofile";

import VendorRegister from "./vendor/VendorRegister";
import VendorDashboard from "./vendor/Vendordashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/Footer" element={<Footer />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="/Header" element={<Header />} /> */}
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Addcategory" element={<Addcategory />} />
        <Route path="/Addevent" element={<Addevent />} />
        <Route path="/Eventverification" element={<Eventverification />} />
        <Route path="/ManageUser" element={<ManageUser />} />
        <Route path="/ManageOrganizer" element={<ManageOrganizer />} />
        <Route path="/VendorManagement" element={<VendorManagement />} />
        <Route path="/Editcategory" element={<Editcategory />} />
        <Route path="/Editevents" element={<Editevents />} />
        <Route path="/Viewcategory" element={<Viewcategory />} />
        <Route path="/Viewevent" element={<Viewevent />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/EditEvent" element={<EditEvent />} />
        <Route path="/EventDashboard" element={<EventDashboard />} />
        <Route path="/EventManager" element={<EventManager />} />
        <Route path="/OrganizerEvent" element={<OrganizerEvent />} />
        <Route path="/OrganizerRegister" element={<OrganizerRegister />} />

        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/Userlogin" element={<Userlogin />} />
        <Route path="/Bookingrequest" element={<Bookingrequest />} />
        <Route path="/bookingstatus" element={<Bookingstatus />} />
        <Route path="/event" element={<Event />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/Userprofile" element={<Userprofile />} />

        <Route path="/VendorRegister" element={<VendorRegister />} />
        <Route path="/VendorDashboard" element={<VendorDashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
