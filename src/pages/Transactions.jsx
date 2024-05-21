import React from 'react';
import VendorWidget from '../components/VendorWidget';
import RenderItem from '../components/RenderItem';

const Transactions = () => {
  return (
    <div className='flex flex-col p-5 w-full gap-5 dark:bg-gray-900 dark:text-white'>
      <div>
        <VendorWidget />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row items-center justify-between gap-2'>
          <h2>Transactions</h2>
          <div className="flex items-center border rounded-xl px-4 py-1 w-56 md:w-96 lg:w-[700px] h-12 bg-white dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 dark:text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded-md w-full focus:outline-none focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
        <RenderItem />
      </div>
    </div>
  );
}

export default Transactions;
