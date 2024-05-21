import { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import ToggleSwitch from './components/ToggleSwitch';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Vendors from './pages/Vendors';
import Transactions from './pages/Transactions';
import Notifications from './pages/Notifications';
import Support from './pages/Support';
import SuperAdmin from './pages/SuperAdmin';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import CustomerProfile from './pages/CustomerProfile';
import VendorProfile from './pages/VendorProfile';
import Login from './pages/Login';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const shouldDisplaySidebarAndNavbar = location.pathname !== '/login';

  return (
    <div className={`flex overflow-x-hidden bg-[#FAFAFA] ${shouldDisplaySidebarAndNavbar ? 'bg-white dark:bg-black' : ''}`}>
      {shouldDisplaySidebarAndNavbar && (
        <div className='bg-white dark:bg-black'>
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>
      )}
      <div className='w-full'>
        {shouldDisplaySidebarAndNavbar && (
          <Navbar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/support" element={<Support />} />
          <Route path="/superAdmin" element={<SuperAdmin />} />
          <Route path="/customer/:id" element={<CustomerProfile />} />
          <Route path="/vendors/:id" element={<VendorProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
