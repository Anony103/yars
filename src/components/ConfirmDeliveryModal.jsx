import React from 'react';

const ConfirmDeliveryModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
        <h2 className="text-lg font-semibold mb-4">Confirm Delivery</h2>
        <p className="mb-4">Are you sure you want to confirm the delivery?</p>
        <div className="flex justify-end gap-4">
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeliveryModal;
