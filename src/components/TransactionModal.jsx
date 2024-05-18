import React from 'react';
import profile from '../assets/profile.svg';

const TransactionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 sm:mx-auto">
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mb-6">
          <img src={profile} alt="Profile" className="w-24 h-24 rounded-full" />
        </div>

        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold">User:</span>
            <span>Anjous Tope</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Email Address:</span>
            <span>topeanjous@gmail.com</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Phone Number:</span>
            <span>08078988767</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Category:</span>
            <span>Customer</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Transaction Type:</span>
            <span>Catering, Deejay</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Transaction ID:</span>
            <span>#17889987</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Date & Time:</span>
            <span>01-02-2024 at 09:34 AM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Recipient:</span>
            <span>+23481302725224</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Amount:</span>
            <span>₦650,000</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Transaction Status:</span>
            <span>Successful</span>
          </div>
        </div>

        <div className="flex justify-center w-full mt-6">
          <button className="w-full bg-[#D8541B] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
