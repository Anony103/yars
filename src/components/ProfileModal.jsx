import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../assets/pic.png';
import logout from '../assets/Logout.svg';


const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4 sm:mx-auto">
        <h2 className="text-xl font-semibold mb-4">My Administrator Profile</h2>
        <div className="flex flex-col items-center border-b py-6">
          <img src={pic} alt="User" className="w-24 h-24 rounded-full mb-4" />
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-2">Basic Information</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Name:</h4>
                <p className="w-2/3">Justin Bergson</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Gender:</h4>
                <p className="w-2/3">Female</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Email:</h4>
                <p className="w-2/3">eleanorpena@domain.com</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Phone No:</h4>
                <p className="w-2/3">08012345678</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Role:</h4>
                <p className="w-2/3">Super Admin</p>
              </div>
            </div>
            <h3 className="font-semibold text-lg mt-4 mb-2">Additional Information</h3>
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Joined:</h4>
              <p className="w-2/3">01-05-2023 at 11:34 PM</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-4 space-y-2">
          <NavLink className="w-full">
          <img src="" alt="" />
            <h3>Change Password</h3>
          </NavLink>
          <NavLink  className="w-full flex gap-4">
          <img src={logout} alt="" className="w-6 h-6" />
            <h3 className='text-[#D8541B]'>Logout</h3>
          </NavLink>
        </div>
        
        <div className="flex justify-between mt-4 space-x-2">
          <button
            onClick={onClose}
            className="w-1/2 border border-[#D8541B] text-black px-4 py-2 rounded-xl"
          >
            Close
          </button>
          <button
            className="w-1/2 bg-[#D8541B] text-white px-4 py-2 rounded-xl"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
