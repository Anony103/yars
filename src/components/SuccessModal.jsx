import React from 'react';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <h2 className="text-lg font-semibold mb-4">Delivery Confirmed</h2>
        <p className="mb-4">The delivery has been successfully confirmed.</p>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
