import React, { useState } from 'react';
import { customers } from '../../data';
import { useParams } from 'react-router-dom';
import Wiget from '../components/Wiget';
import VendorProfiles from '../components/VendorProfiles';
import Hisory from '../components/History';


const VendorProfile = () => {

  const [selectedOption, setSelectedOption] = useState('profile');
  

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const { id } = useParams();
  console.log(id);

  const customer = customers.find((item) => item.id === id);

  const render = () => {
    if (selectedOption === 'profile') {
      return (
        <div className='w-full flex flex-col p-5 gap-8'>
      <div className='flex flex-col  '>
        <Wiget />
      </div>
      
      <div className='flex flex-col lg:flex-row  gap-2'>
          <VendorProfiles/>
      </div>

    </div>
      );
    } else if (selectedOption === 'history') {
      return (
        <div>
          <div className='flex flex-col mb-12 '>
        <Wiget />
      </div>
      <Hisory/>

        </div>
      );
    } else {
      return (
        <div>
          <div className='flex flex-col  '>
        <Wiget />
      </div>

        </div>
      );
    }
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Manage Push Notifications</h2>
      <div className="flex items-center justify-between gap-2 mb-4 lg:w-1/2">
        <button 
        onClick={() => handleOptionChange('profile')}
        className={`px-4 py-2 rounded transition duration-300 ${selectedOption === 'profile' ? 'text-white bg-black' : 'bg-gray-100 text-black'}`}>
          Profile
        </button>
        <button onClick={() => handleOptionChange('history')}
        className={`px-4 py-2 rounded transition duration-300 ${selectedOption === 'history' ? 'text-white bg-black' : 'bg-gray-200 text-black'}`}>
          Order History
        </button>
        <button onClick={() => handleOptionChange('transaction')}
        className={`px-4 py-2 rounded transition duration-300 ${selectedOption === 'transaction' ? 'text-white bg-black' : 'bg-gray-200 text-black'}`}>
          Recent Transactions
        </button>
      </div>
      {render()}
    </div>
  );
};

export default VendorProfile;
