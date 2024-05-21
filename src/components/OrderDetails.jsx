import React, { useState } from 'react';
import ConfirmDeliveryModal from './ConfirmDeliveryModal';
import SuccessModal from './SuccessModal';

const OrderDetails = ({ isOpen, onClose }) => {
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  if (!isOpen) return null;

  const handleConfirmClick = () => {
    setConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  const handleConfirmDelivery = () => {
    // Handle the confirmation of delivery
    console.log('Delivery Confirmed');
    setConfirmModalOpen(false);
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg font-semibold">Order Details</h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="border rounded-lg p-4 mb-2">
          <h2 className="text-md font-semibold mb-2">CUSTOMER DETAILS</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="font-medium">Name:</span>
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
              <span className="font-medium">Address:</span>
              <span>Sonikaz Hostel, Funaab, Abeokuta</span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 mb-2">
          <h2 className="text-md font-semibold mb-2">ORDER DETAILS</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="font-medium">Order ID:</span>
              <span>ejsHjoErnck</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date:</span>
              <span>01-04-2023</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Merchant:</span>
              <span>Bami Foods</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date Placed:</span>
              <span>12/02/24</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date Completed:</span>
              <span>12/02/24</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Preference:</span>
              <span>Delivery</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Grand Total:</span>
              <span>₦150,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Transaction Status:</span>
              <div className="flex items-center gap-2">
                <span>Out for Delivery</span>
                <button
                onClick={handleConfirmClick}
                className="border px-4 py-2 rounded-md">Confirm Delivery</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 mb-2">
          <h2 className="text-md font-semibold mb-2">ORDER(S)</h2>
          <div className="flex flex-col gap-2">
            <div className='flex justify-between'>
              <span className="font-medium">1st Order</span>
              <div>
                <p>Jollof Rice and Chicken (×200) - ₦300,000</p>
                <p>Amala (×100) - ₦20,000</p>
                <p>Beef (×100) - ₦90,000</p>
              </div>
            </div>
            <div className='flex justify-between'>
              <span className="font-medium">2nd Order</span>
              <div>
                <p>Jollof Rice and Chicken (×200) - ₦300,000</p>
                <p>Amala (×100) - ₦20,000</p>
                <p>Beef (×100) - ₦90,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button 
            className="bg-[#D8541B] text-white px-4 py-2 rounded-md hover:bg-[#a94515]"
            onClick={onClose}
          >
            Okay
          </button>
        </div>
      </div>
      <ConfirmDeliveryModal 
        isOpen={confirmModalOpen} 
        onClose={handleCloseConfirmModal} 
        onConfirm={handleConfirmDelivery}
      />
      <SuccessModal 
        isOpen={successModalOpen} 
        onClose={handleCloseSuccessModal}
      />
    </div>
  );
};

export default OrderDetails;

