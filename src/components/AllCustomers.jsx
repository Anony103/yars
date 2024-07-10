import React, { useEffect, useState, useMemo } from 'react';
import pic from '../assets/pic.png';
import { NavLink } from 'react-router-dom';
import { UserAuth } from '../config/AuthContext';

const ITEMS_PER_PAGE = 15;

const AllCustomers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const { users, fetchAllUsers } = UserAuth();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  console.log(users);

  const filteredCustomers = useMemo(() => {
    return users
      .filter(user =>
        user.fullName && user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === 'A-Z') {
          return a.fullName.localeCompare(b.fullName);
        } else if (sortOrder === 'Z-A') {
          return b.fullName.localeCompare(a.fullName);
        }
        return 0;
      });
  }, [searchQuery, sortOrder, users]);

  console.log(filteredCustomers);

  const totalPages = Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCustomers = filteredCustomers.slice(startIndex, endIndex);

  console.log(currentCustomers);

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const downloadCSV = () => {
    const csvData = [
      ["ID", "Full Name"],
      ...users.map(user => [user.id, user.fullName])
    ]
    .map(e => e.join(","))
    .join("\n");

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'users.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <h1 className='dark:text-white'>All Customers</h1>
          <div className='bg-[#4BA457] text-white px-2 rounded-md'>{users.length}</div>
        </div>
        <div className='flex gap-2' onClick={downloadCSV} style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <h2 className='dark:text-white'>Download</h2>
        </div>
      </div>
      <div className="flex items-center border rounded-xl px-4 py-1 w-full h-12 bg-white dark:bg-gray-900 dark:border-gray-700">
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
          className="px-2 py-1 rounded-md w-full focus:outline-none focus:border-transparent dark:bg-gray-900 dark:text-white"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className='flex items-center'>
        <div className='flex gap-2 items-center'>
          <p>Sort:</p>
          <div className='flex gap-1 items-center cursor-pointer' onClick={() => handleSortChange('A-Z')}>
            <h2>A-Z</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
          </div>
          <div className='flex gap-1 items-center cursor-pointer' onClick={() => handleSortChange('Z-A')}>
            <h2>Z-A</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
          </div>
        </div>
      </div>
      <ol className="px-4">
        {currentCustomers.map((item, index) => (
          <li className="border-b border-gray-200 py-4" key={index}>
            <NavLink to={`/customer/${item.id}`} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className='dark:text-white'>{index}</h1>
                <div className="">
                  <img src={pic} alt="" className="w-10 h-10 rounded-full" />
                </div>
                <h2 className="text-lg font-medium dark:text-white">{item.fullName}</h2>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
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
  );
};

export default AllCustomers;
