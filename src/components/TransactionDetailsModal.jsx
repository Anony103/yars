import React from 'react';

const TransactionDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold">Transaction Details</h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="border rounded-lg p-4 mb-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="font-medium">User:</span>
              <span>Jenny Wilson</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email Address:</span>
              <span>jennywilson@checkretail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Phone Number:</span>
              <span>08012345678</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Category:</span>
              <span>Customer</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Transaction Type:</span>
              <span>Bill Payment - Airtime</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Transaction ID:</span>
              <span>ejsHjoErnck</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date & Time:</span>
              <span>01-04-2023 at 09:34 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Recipient:</span>
              <span>+23481302725224</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Amount:</span>
              <span>₦650,000</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Transaction Status:</span>
              <span>Successful</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button 
            className="bg-[#D8541B] text-white px-4 py-2 rounded-md hover:bg-[#a94515]"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsModal;
