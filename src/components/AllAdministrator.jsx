import React, { useState } from 'react';
import pic from '../assets/pic.png';
import { customers } from '../../data';
import { NavLink } from 'react-router-dom';

const ITEMS_PER_PAGE = 10;


const AllAdministrator = () => {
  const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(customers.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentCustomers = customers.slice(startIndex, endIndex);
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  return (
    <div>
        <ol className="px-4">
        {currentCustomers.map((item, index) => (
          <li className="border-b border-gray-200 py-4" key={index}>
            <NavLink to={`/customer/${item.id}`} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className='dark:text-white'>{item.id}</h1>
                <div className="">
                  <img src={pic} alt="" className="w-10 h-10 rounded-full" />
                </div>
                <h2 className="text-lg font-medium dark:text-white">{item.name}</h2>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </NavLink>
          </li>
        ))}
      </ol>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`flex gap-2 dark:text-white py-2 px-3 rounded-md ${currentPage === 1 ? 'border' : 'bg-[#D8541B] text-white'} `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`flex gap-2 dark:text-white py-2 px-3 rounded-md ${currentPage === totalPages ? 'border' : 'bg-[#D8541B] text-white'} `}
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
      
    </div>
  )
}

export default AllAdministrator
