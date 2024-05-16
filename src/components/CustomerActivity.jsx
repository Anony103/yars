import React from 'react'
import CircleActivity from './CircleActivity'

const CustomerActivity = () => {
  return (
    <div className='flex-1 px-5 py-4 border-2 border-[#EDF2F7] shadow-sm rounded-2xl w-full lg:w-1/5 bg-white'>
      <h1 className="text-xl lg:text-2xl font-bold mb-4">Transaction Insight</h1>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-4'>
          <div className='bg-green-500 rounded-full w-4 h-4'></div>
          <p className="text-sm lg:text-base">Active Customers</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='bg-amber-500 rounded-full w-4 h-4'></div>
          <p className="text-sm lg:text-base">Inactive Customer</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12 h-96">
        <CircleActivity percentage={70} wid={40}/>
      </div>
    </div>
  )
}

export default CustomerActivity
