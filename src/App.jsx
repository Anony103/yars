import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Vendors from './pages/Vendors';
import Transactions from './pages/Transactions';
import Notifications from './pages/Notifications';
import Support from './pages/Support';
import SuperAdmin from './pages/SuperAdmin';
import CustomerProfile from './pages/CustomerProfile';
import VendorProfile from './pages/VendorProfile';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Production from './pages/Production';
import AddProduct from './pages/Vendor/AddProduct';
import SellerSignUp from './pages/Vendor/SellerSignUp';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex overflow-x-hidden bg-[#FAFAFA] dark:bg-black">
      {!isLoginPage && <Sidebar isSidebarOpen={isSidebarOpen} />}
      <div className="w-full">
        {!isLoginPage && <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/seller-signup" element={<SellerSignUp />} />
          <Route element={<PrivateRoute roles={['admin', 'superAdmin', 'vendor']} />}>
            <Route path="/" element={<Home />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/product" element={<Production />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/support" element={<Support />} />
            <Route path="/customer/:id" element={<CustomerProfile />} />
            <Route path="/vendors/:id" element={<VendorProfile />} />
          </Route>
          <Route element={<PrivateRoute roles={['superAdmin']} />}>
            <Route path="/superAdmin" element={<SuperAdmin />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
