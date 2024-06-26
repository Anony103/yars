import React from 'react';
import CircleProgressBar from './CircleProgressBar';

const TransactionInsight = ({ wid }) => {
  return (
    <div className='flex-1 flex-col px-10 py-4 border-2 border-[#EDF2F7] dark:border-gray-700 shadow-sm rounded-2xl w-full lg:w-2/5 bg-white dark:bg-gray-800'>
      <h1 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-200">Transaction Insight</h1>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-4'>
          <div className='bg-green-500 rounded-full w-4 h-4'></div>
          <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">Orders</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='bg-blue-500 rounded-full w-4 h-4'></div>
          <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">Bank Transfer</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='bg-red-500 rounded-full w-4 h-4'></div>
          <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">Wallet to Wallet</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='bg-amber-500 rounded-full w-4 h-4'></div>
          <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">Bills</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 justify-center">
        <CircleProgressBar percentage={50} wid={wid} />
        <CircleProgressBar percentage={25} wid={wid} />
        <CircleProgressBar percentage={78} wid={wid} />
        <CircleProgressBar percentage={37} wid={wid} />
      </div>
    </div>
  );
};

export default TransactionInsight;
