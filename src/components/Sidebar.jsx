import React from 'react';
import menu from '../assets/Overview.svg';
import box from '../assets/Customers.svg';
import notification from '../assets/Notification.svg';
import setting from '../assets/market.svg';
import logout from '../assets/Logout.svg';
import moon from '../assets/Darkmode.svg';
import support from '../assets/Support.svg';
import superAd from '../assets/SuperAdmin.svg';
import card from '../assets/Creditcard.svg';
import ToggleSwitch from './ToggleSwitch';
import { NavLink } from 'react-router-dom';
 
const Sidebar = ({ isSidebarOpen }) => {
  const sidebarClasses = isSidebarOpen ? '' : 'hidden md:flex';
  return (
    <section className={`bg-[#F7F8FA] dark:bg-black border-r border-[#EBECF2] w-28 md:w-64 flex flex-col items-center justify-between py-8 transition-all duration-300 ${sidebarClasses}`}>
      <nav className="flex flex-col items-center md:items-start">
        <div className="p-4">
          <h1 className="font-bold text-[8px] md:text-lg text center font-dm">RAYS MARKETPLACE</h1>
        </div>

        <div className="flex flex-col p-4 gap-5">
          <div className="flex flex-col py-4 gap-5 border-b-2 border-[#E5EAEF]">
            <NavLink to='/' className={({ isActive }) =>
            isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg' : 'flex gap-4 hover:text-[#D8541B]'
            }>
              <div className="text-black">
                <img src={menu} alt="" className="w-6 h-6 text-white" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm">Dashboard</h2>
            </NavLink>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-5">
          <h3 className="text-[8px] md:text-sm font-dm">MAIN MENU</h3>
          <nav className="flex flex-col py-4 gap-5 border-b-2 border-[#E5EAEF]">
          <NavLink to='/customer' className={({ isActive }) =>
            isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg' : 'flex gap-4 hover:text-[#D8541B]'
            }>
              <div className="">
                <img src={box} alt="" className="w-6 h-6" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm">Customers</h2>
            </NavLink>
            <NavLink to='/vendors' className={({ isActive }) =>
            isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg' : 'flex gap-4 hover:text-[#D8541B]'
            }>
              <div className="text-white hover:text-gray-400">
                <img src={setting} alt="" className="w-6 h-6" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm">Vendors</h2>
            </NavLink>
            <NavLink to='/transactions' className={({ isActive }) =>
            isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg' : 'flex gap-4 hover:text-[#D8541B]'
            }>
              <div className="text-white hover:text-gray-400">
                <img src={card} alt="" className="w-6 h-6" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm">Transactions</h2>
            </NavLink>
          </nav>
          <ul className="flex flex-col py-4 gap-5 border-b-2 border-[#E5EAEF]">
            <NavLink to='/notifications' className={({ isActive }) =>
            isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg' : 'flex gap-4 hover:text-[#D8541B]'
            }>
              <div className="text-white hover:text-gray-400">
                <img src={notification} alt="" className="w-6 h-6" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm">Push Notifications</h2>
            </NavLink>
            <NavLink to='/support' className={({ isActive }) =>
            isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg' : 'flex gap-4 hover:text-[#D8541B]'
            }>
              <div className="text-white hover:text-gray-400">
                <img src={support} alt="" className="w-6 h-6" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm">Support</h2>
            </NavLink>
            <NavLink to='/superAdmin' className={({ isActive }) =>
            isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg' : 'flex gap-4 hover:text-[#D8541B]'
            }>
              <div className="text-white hover:text-gray-400">
                <img src={superAd} alt="" className="w-6 h-6" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm">Super Admin</h2>
            </NavLink>
          </ul>
          <ul className="flex flex-col gap-2">
            <li to='' className="flex gap-4 items-center gap-2">
              <div className="text-white hover:text-gray-400">
                <img src={moon} alt="" className="w-6 h-6" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm">Dark Theme</h2>
              <ToggleSwitch />
            </li>
            <NavLink to='' className="flex gap-4">
              <div className="text-white hover:text-gray-400">
                <img src={logout} alt="" className="w-6 h-6" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm text-[#D8541B]">Logout</h2>
            </NavLink>
          </ul>
        </div>
      </nav>
      {/* <div>
        <div>
          <div>
            <p>Adding up vendor who reached out for assistance is done here</p>
            <button type="button">+Add Vendor</button>
          </div>
          <div>
            <img src={icon} alt="" />
          </div>
        </div>
        <div>
        <h2>RAYS Marketplace Admin Dashboard</h2>
        <p>© 2024 All Rights Reserved</p>
        </div>
      </div> */}
    </section>
  );
};

export default Sidebar;
