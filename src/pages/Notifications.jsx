import React, { useState } from 'react';

const Notifications = () => {

  const [selectedOption, setSelectedOption] = useState('newNotification');
  const [status, setStatus] = useState('active');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  const render = () => {
    if (selectedOption === 'newNotification') {
      return (
        <div>
          <div className="mb-4">
            <label htmlFor="headline" className="block text-sm font-medium text-gray-700 dark:text-white">Headline</label>
            <input
              type="text"
              id="headline"
              className="mt-1 block w-full h-16 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">Message Body</label>
            <textarea
              id="message"
              className="mt-1 block w-full border border-gray-300 h-36 rounded-md shadow-sm dark:bg-gray-800 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 dark:text-white">Set Target Users</h4>
              <p className="mb-4 dark:text-white">What category of users is this notification relevant to?</p>
              <div className="flex flex-col gap-4">
                <label htmlFor="allUsers" className="flex items-center justify-between w-96 gap-2 border border-gray-300 p-4 rounded-md dark:border-gray-600 dark:text-white">
                  All Users (Customers & Vendors)
                  <input type="radio" id="allUsers" name="userCategory" className="form-radio" />
                </label>
                <label htmlFor="customers" className="flex items-center justify-between w-96 gap-2 border border-gray-300 p-4 rounded-md dark:border-gray-600 dark:text-white">
                  Customers Only
                  <input type="radio" id="customers" name="userCategory" className="form-radio" />
                </label>
                <label htmlFor="vendors" className="flex items-center justify-between w-full md:w-96 gap-2 border border-gray-300 p-4 rounded-md dark:border-gray-600 dark:text-white">
                  Vendors Only
                  <input type="radio" id="vendors" name="userCategory" className="form-radio" />
                </label>
              </div>
            </div>
            <div className="flex-1">
              <div className='flex flex-col border border-gray-300 rounded-lg p-4 mb-4 dark:border-gray-600'>
                <h4 className="text-lg font-semibold mb-2 dark:text-white">New Customers</h4>
                <p className="mb-4 dark:text-white">Notification would be sent to customers who signed up between:</p>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 dark:bg-gray-800 dark:text-white"
                  />
                  <span className="mx-2">to</span>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
              <div className='flex flex-col border border-gray-300 rounded-lg p-4 dark:border-gray-600'>
                <h4 className="text-lg font-semibold mb-2 dark:text-white">Active Status</h4>
                <div className="flex items-center gap-4 mb-4">
                <label className="mr-4">
                <input
                 type="radio"
                 name="status"
                 value="active"
                 checked={status === 'active'}
                 onChange={() => setStatus('active')}
                 className="mr-1 text-sm font-medium text-gray-700 dark:text-white"
                 />
                 Active
                </label>
                <label>
                <input
                type="radio"
                name="status"
               value="inactive"
                checked={status === 'inactive'}
                onChange={() => setStatus('inactive')}
                className="mr-1 text-sm font-medium text-gray-700 dark:text-white"
                 />
                Inactive
                 </label>
                </div>
                <p className="mb-4 dark:text-white">Notification would be sent to customers who signed up between:</p>
                <div className="flex flex-col items-center sm:flex-row gap-2">
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 dark:bg-gray-800 dark:text-white"
                  />
                  <span className="mx-2">to</span>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center mt-12'>
            <button type="button" className='py-4 px-48 bg-[#D8541B] text-white rounded-full'>Send Push Notification</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 mb-4 dark:bg-gray-800">
          <h2 className="text-3xl font-bold md:mr-4 dark:text-white">1</h2>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2 dark:text-white">50% off your orders this week!👌💃</h2>
            <p className="text-sm text-gray-700 mb-4 dark:text-white">You asked, and we listened. We're thrilled to announce that you can now send funds to any bank account effortlessly. Update your app now to enjoy! 🎉</p>
            <div className="flex items-center mb-4">
              <div className="mr-4 dark:text-white">To: <span className="font-bold dark:text-white">Customers</span></div>
              <div className='dark:text-white'>By: Bode (Transactions)</div>
              <span className="mx-2">|</span>
              <p className='dark:text-white'>Today at 09:34 AM</p>
            </div>
          </div>
          <button className="px-4 py-2 border text-black rounded hover:bg-blue-600 transition duration-300 dark:bg-gray-700 dark:text-white" type="button">View</button>
        </div>
      );
    }
  };


  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Manage Push Notifications</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => handleOptionChange('newNotification')}
          className={`px-4 py-2 rounded transition duration-300 ${selectedOption === 'newNotification' ? 'text-white bg-black dark:text-[#000000] dark:bg-white' : 'bg-gray-200 text-black dark:text-white dark:bg-gray-800'}`}
        >
          New Notification
        </button>
        <button
          onClick={() => handleOptionChange('Notification')}
          className={`px-4 py-2 rounded transition duration-300 ${selectedOption === 'Notification' ? 'text-white bg-black dark:text-[#000000] dark:bg-white' : 'bg-gray-200 text-black dark:text-white dark:bg-gray-800'}`}
        >
          Notification History
        </button>
      </div>
      {render()}
    </div>
  );
};

export default Notifications;
