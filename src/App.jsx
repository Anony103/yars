import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch'
import Home from './pages/Home'
import { Routes, Route  } from "react-router-dom";
import Customer from './pages/Customer'
import Vendors from './pages/Vendors'
import Transactions from './pages/Transactions'
import Notifications from './pages/Notifications'
import Support from './pages/Support'
import SuperAdmin from './pages/SuperAdmin'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import CustomerProfile from './pages/CustomerProfile'
import VendorProfile from './pages/VendorProfile'



const App = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Before toggle:", isSidebarOpen);
    setSidebarOpen(!isSidebarOpen);
    console.log("After toggle:", isSidebarOpen);
  };
  return (
    <div>
      <div className='flex overflow-x-hidden bg-[#FAFAFA] bg-white dark:bg-black'>
       <div className='bg-white dark:bg-black'>
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>
      <div className='w-full'>
      <Navbar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/customer" element={<Customer/>} />
              <Route path="/vendors" element={<Vendors/>} />
              <Route path="/transactions" element={<Transactions/>} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/support" element={<Support/>} />
              <Route path="/superAdmin" element={<SuperAdmin/>} />
              <Route path="/customer/:id" element={<CustomerProfile/>} />
              <Route path="/vendor/:id" element={<VendorProfile/>} />
            </Routes>
      </div>
    </div>
    </div>
  )
}

export default App
