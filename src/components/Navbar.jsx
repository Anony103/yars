import React, { useState } from 'react';
import bell from '../assets/bell.svg';
import pic from '../assets/pic.png';
import ProfileModal from './ProfileModal';
import LogoutModal from './LogoutModal';
import PasswordModal from './PasswordModal';

const Navbar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);

  


  const handleNavLinkClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handlelogoutClick = () => {
    setLogoutModalOpen(true);
    setIsDropdownOpen(false);
  };

   const handlePasswordClick = () => {
    setPasswordModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setLogoutModalOpen(false);
    setPasswordModalOpen(false);

  };

  return (
    <header className='p-4 flex justify-between items-center bg-[#FAFAFA] dark:bg-black border-b-2 border-[#E5EAEF]'>
      <section className='flex flex-row items-center justify-between gap-2'>
        <button
          type="button"
          className="md:hidden"
          onClick={() => toggleSidebar()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div className="flex items-center border rounded-xl px-4 py-1 w-56 md:w-96 lg:w-[700px] h-12 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md w-full focus:outline-none focus:border-transparent"
          />
        </div>
      </section>
      <section className='flex flex-row items-center gap-2'>
        <div className='flex flex-row items-center gap-2'>
          <div className='border rounded-3xl border-[#DADDDD] md:p-2'>
            <img src={bell} alt="" className='w-6 dark:text-white' />
          </div>
        </div>
        <div className='relative flex flex-row items-center md:px-2 md:gap-2'>
          <button className='text-left flex flex-row items-center gap-1' onClick={handleNavLinkClick}>
            <img src={pic} alt="" />
            <div className='hidden md:flex flex-col'>
              <p className='font-jakarta-sans font-normal text-base dark:text-white'>Justin Bergson</p>
              <p className='font-jakarta-sans font-normal text-[14px] dark:text-white'>Admin</p>
            </div>
          </button>
          {isDropdownOpen && (
            <div className='absolute left-0 top-full mt-2 w-48 bg-white border rounded shadow-lg'>
              <div className='py-2'>
                <button onClick={handleProfileClick} className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100'>My Admin Profile</button>
                <button onClick={handlePasswordClick} className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Change Password</button>
                <button onClick={handlelogoutClick} className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Logout</button>
              </div>
            </div>
          )}
        </div>
      </section>
      <ProfileModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <LogoutModal isOpen={logoutModalOpen} onClose={handleCloseModal} />
      <PasswordModal isOpen={passwordModalOpen} onClose={handleCloseModal}/>

    </header>
  );
};

export default Navbar;
