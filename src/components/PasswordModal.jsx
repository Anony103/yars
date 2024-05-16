import React,{useState} from 'react';
import lock from '../assets/lock.svg';
import NewPasswordModal from './NewPasswordModal';

const PasswordModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  
  
  const handlePasswordClick = () => {
    setPasswordModalOpen(true);
    onClose();
  };

  const handleCloseModal = () => {
    setPasswordModalOpen(false);

  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 sm:mx-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-xl font-semibold mb-4">Change Password</h1>
          <div className="w-full">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
              <img src={lock} alt="Lock Icon" className="w-6 h-6 mx-3" />
              <input
                type="password"
                id="password"
                name="password"
                className="flex-1 px-2 py-2 border-none focus:outline-none rounded-r-lg"
              />
              <button className="px-3 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full mt-6 space-x-2">
            <button onClick={handlePasswordClick} className="w-1/2 bg-[#D8541B] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Proceed
            </button>
          </div>
        </div>
      </div>
      <NewPasswordModal isOpen={passwordModalOpen} onClose={handleCloseModal}/>
    </div>
  );
};

export default PasswordModal;
