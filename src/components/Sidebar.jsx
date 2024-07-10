import React from 'react';
import logout from '../assets/Logout.svg';
import ToggleSwitch from './ToggleSwitch';
import { NavLink } from 'react-router-dom';
import { CiGrid42 } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { MdOutlineCreditCard } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { PiChatsBold } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";
import { UserAuth } from '../config/AuthContext';
import { useNavigate } from 'react-router-dom';


const Sidebar = ({ isSidebarOpen }) => {
  const { user, logOut } = UserAuth();
  const sidebarClasses = isSidebarOpen ? '' : 'hidden md:flex';
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <section className={`bg-[#F7F8FA] dark:bg-black border-r border-[#EBECF2] w-28 md:w-64 flex flex-col items-center md:items-start justify-between py-8 transition-all duration-300 ${sidebarClasses}`}>
      <nav className="flex flex-col items-center md:items-start w-full">
        <div className="p-4 w-full flex justify-center md:justify-start">
          <h1 className="font-bold text-[8px] md:text-lg dark:text-white text-center font-dm">RAYS MARKETPLACE</h1>
        </div>

        <div className="flex flex-col p-4 gap-5 w-full items-center md:items-start">
          <div className="flex flex-col py-4 gap-5 border-b-2 border-[#E5EAEF] w-full">
            <NavLink to='/' className={({ isActive }) =>
              isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg w-full justify-center md:justify-start' : 'flex gap-4 dark:text-white hover:text-[#D8541B] w-full justify-center md:justify-start'
            }>
              <CiGrid42 className='w-6 h-6'/>
              <h2 className="hidden md:flex font-normal dark:text-white font-dm">Dashboard</h2>
            </NavLink>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-5 w-full items-center md:items-start">
          <h3 className="text-[8px] md:text-sm dark:text-white font-dm">MAIN MENU</h3>
          <nav className="flex flex-col justify-center md:justify-start py-4 gap-5 border-b-2 border-[#E5EAEF] w-full">
            <NavLink to='/customer' className={({ isActive }) =>
              isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg w-full justify-center md:justify-start' : 'flex gap-4 dark:text-white hover:text-[#D8541B] w-full justify-center md:justify-start'
            }>
              <MdOutlinePeople className='w-6 h-6'/>
              <h2 className="hidden md:flex dark:text-white font-normal font-dm">Customers</h2>
            </NavLink>
            {user?.role !== 'vendor' && (
              <NavLink to='/vendors' className={({ isActive }) =>
                isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg w-full justify-center md:justify-start' : 'flex gap-4 dark:text-white hover:text-[#D8541B] w-full justify-center md:justify-start'
              }>
                <FaShop className='w-6 h-6' />
                <h2 className="hidden md:flex dark:text-white font-normal font-dm">Vendors</h2>
              </NavLink>
            )}
            {user?.role === 'vendor' && (
              <NavLink to='/product' className={({ isActive }) =>
                isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg w-full justify-center md:justify-start' : 'flex gap-4 dark:text-white hover:text-[#D8541B] w-full justify-center md:justify-start'
              }>
                <CiGrid42 className='w-6 h-6'/>
                <h2 className="hidden md:flex dark:text-white font-normal font-dm">Products</h2>
              </NavLink>
            )}
            <NavLink to='/transactions' className={({ isActive }) =>
              isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg w-full justify-center md:justify-start' : 'flex gap-4 dark:text-white hover:text-[#D8541B] w-full justify-center md:justify-start'
            }>
              <MdOutlineCreditCard className='w-6 h-6' />
              <h2 className="hidden md:flex dark:text-white font-normal font-dm">Transactions</h2>
            </NavLink>
          </nav>
          <ul className="flex flex-col py-4 gap-5 border-b-2 border-[#E5EAEF] w-full">
            <NavLink to='/notifications' className={({ isActive }) =>
              isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg w-full justify-center md:justify-start' : 'flex gap-4 dark:text-white hover:text-[#D8541B] w-full justify-center md:justify-start'
            }>
              <MdOutlineNotificationsNone className='w-6 h-6'/>
              <h2 className="hidden md:flex dark:text-white font-normal font-dm">Push Notifications</h2>
            </NavLink>
            <NavLink to='/support' className={({ isActive }) =>
              isActive ? 'flex gap-4 bg-[#D8541B] font-bold text-white p-4 rounded-lg w-full justify-center md:justify-start' : 'flex gap-4 dark:text-white hover:text-[#D8541B] w-full justify-center md:justify-start'
            }>
              <PiChatsBold className='w-6 h-6'/>
              <h2 className="hidden md:flex dark:text-white font-normal font-dm">Support</h2>
            </NavLink>
            {user?.role === 'superAdmin' && (
              <NavLink to='/superAdmin' className={({ isActive }) =>
                isActive ? 'flex gap-4 bg-[#D8541B] font-bold  text-white p-4 rounded-lg w-full justify-center md:justify-start' : 'flex gap-4 dark:text-white hover:text-[#D8541B] w-full justify-center md:justify-start'
              }>
                <IoPeople className='w-6 h-6'/>
                <h2 className="hidden md:flex font-normal dark:text-white font-dm">Super Admin</h2>
              </NavLink>
            )}
          </ul>
          <ul className="flex flex-col gap-2 w-full items-center md:items-start">
            <li className="flex gap-4 items-center">
              <ToggleSwitch />
            </li>
            <button onClick={handleLogout} className="flex gap-4 justify-center md:justify-start w-full">
              <div className="text-white hover:text-gray-400">
                <img src={logout} alt="Logout" className="w-6 h-6" />
              </div>
              <h2 className="hidden md:flex font-normal font-dm text-[#D8541B]">Logout</h2>
            </button>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;
