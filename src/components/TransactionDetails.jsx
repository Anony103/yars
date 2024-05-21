import React, { useState } from 'react';

const TransactionDetails = ({ isOpen, onClose }) => {
  const [transactionStatus, setTransactionStatus] = useState('Pending');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold">Transaction Details</h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="border rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">GENERAL TRANSACTION DETAILS</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="font-medium">User:</span>
              <span>Cameron Williamson</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>cascadelounge@domain.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Phone Number:</span>
              <span>08012345678</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Category:</span>
              <span>Merchant</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Transaction Type:</span>
              <span>Withdrawal</span>
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
              <span className="font-medium">Amount:</span>
              <span>₦650,000</span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">BANK ACCOUNT DETAILS</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="font-medium">Bank Name:</span>
              <span>Providus Bank</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Account Name:</span>
              <span>Cascade Lounge</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Account Number:</span>
              <span>
                0257363326 
                <button className="ml-2 text-blue-500 hover:text-blue-700">Copy</button>
              </span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">TRANSACTION STATUS</h2>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="status" 
                value="Pending" 
                checked={transactionStatus === 'Pending'}
                onChange={(e) => setTransactionStatus(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Pending</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="status" 
                value="Successful" 
                checked={transactionStatus === 'Successful'}
                onChange={(e) => setTransactionStatus(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Successful</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="status" 
                value="Failed" 
                checked={transactionStatus === 'Failed'}
                onChange={(e) => setTransactionStatus(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Failed</span>
            </label>
          </div>
        </div>
        <div className="bg-green-100 text-green-700 p-2 rounded-lg mb-4">
          <p className="text-sm">Confirm that user has been credited before updating status to completed</p>
        </div>
        <div className="flex justify-between">
          <button 
            className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-[#D8541B] text-white px-4 py-2 rounded-md hover:bg-[#a94515]"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
