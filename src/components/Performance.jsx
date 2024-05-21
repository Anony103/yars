import React, { useState } from 'react';

const Performance = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-md dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">General Order Performance</h1>
      <div className="flex flex-col gap-4">
        <div className="w-full md:w-1/4">
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleChange}
            className="w-full font-jakarta-sans font-normal border border-gray-300 dark:border-gray-600 text-sm py-2 px-2 rounded-lg focus:outline-none bg-white dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="option1">Monthly</option>
            <option value="">Yearly</option>
            <option value="option2">Weekly</option>
            <option value="option3">Daily</option>
          </select>
        </div>
        <div className="flex flex-col gap-4 w-full md:full">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">TODAY</h2>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col ">
                <div className='flex flex-row items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 dark:stroke-current dark:text-green-500"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <h2 className="text-sm font-semibold">Completed:</h2>
                </div>
                <div>
                  <h1 className="text-xl font-bold">5,723</h1>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className='flex flex-row items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 dark:stroke-current dark:text-green-500"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <h2 className="text-sm font-semibold">Completed:</h2>
                </div>
                <div>
                  <h1 className="text-xl font-bold">5,723</h1>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className='flex flex-row items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 dark:stroke-current dark:text-green-500"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <h2 className="text-sm font-semibold">Completed:</h2>
                </div>
                <div>
                  <h1 className="text-xl font-bold">5,723</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
