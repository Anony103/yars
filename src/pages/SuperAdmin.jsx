import React, { useState } from 'react';
import AllAdministrator from '../components/AllAdministrator';
import ManageAdmins from '../components/ManageAdmins';

const SuperAdmin = () => {

  const [selectedOption, setSelectedOption] = useState('administrator');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  const render = () => {
    if (selectedOption === 'administrator') {
      return (
        <div>
          <AllAdministrator/>
        </div>
      );
    } else {
      return (
        <div>
          <ManageAdmins/>
        </div>
      );
    }
  };


  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Manage Administrators</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
        onClick={() => handleOptionChange('administrator')}
        className={`px-4 py-2 rounded transition duration-300 ${selectedOption === 'administrator' ? 'text-white bg-black dark:text-black dark:bg-white' : 'bg-gray-100 text-black dark:text-white dark:bg-gray-800 '}`}>
          Administrator
        </button>
        <button onClick={() => handleOptionChange('register')}
        className={`px-4 py-2 rounded transition duration-300 ${selectedOption === 'register' ? 'text-white bg-black dark:text-black dark:bg-white' : 'bg-gray-100 text-black dark:text-white dark:bg-gray-800'}`}>
          Register New Admin
        </button>
      </div>
      {render()}
    </div>
  );
};

export default SuperAdmin;
