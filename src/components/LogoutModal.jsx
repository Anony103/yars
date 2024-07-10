import React from 'react';
import pic from '../assets/pic.png';
import { UserAuth } from '../config/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { logOut } = UserAuth();
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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4 sm:mx-auto">
        <div className="flex flex-col items-center py-6">
          <img src={pic} alt="User" className="w-24 h-24 rounded-full mb-4" />
          <div className="w-full text-center">
            <h4 className="text-lg font-semibold mb-2">Are you sure you want to logout?</h4>
            <p className="text-gray-600">You are about to logout of your administrator account. Are you sure you want to proceed?</p>
          </div>
        </div>

        <div className="flex justify-between mt-4 space-x-2">
          <button
            onClick={onClose}
            className="w-1/2 border border-[#D8541B] text-black px-4 py-2 rounded-xl hover:bg-gray-100"
          >
            No
          </button>
          <button
            className="w-1/2 bg-[#D8541B] text-white px-4 py-2 rounded-xl hover:bg-[#b24516]"
            onClick={handleLogout}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
