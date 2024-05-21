import React, { useState } from 'react';
import { transactions } from '../../data';
import Pagination from './Pagination';

const ITEMS_PER_PAGE = 10;

const DepositTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleDeposit = transactions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className='overflow-auto'>
      <table className="w-full">
            <thead>
              <tr className='border-b dark:border-gray-700'>
                <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] dark:text-gray-400 md:table-cell">S/N</th>
                <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] dark:text-gray-400 md:table-cell">Transaction ID</th>
                {/* <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] dark:text-gray-400 md:table-cell">Type</th> */}
                <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] dark:text-gray-400 md:table-cell">User</th>
                <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] dark:text-gray-400 md:table-cell">Status</th>
                <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] dark:text-gray-400 md:table-cell">Amount(₦)</th>
                <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] dark:text-gray-400 md:table-cell">Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleDeposit.map((item, index) => (
                <tr className='border-b' key={index}>
                  <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D] dark:text-gray-300">{item.id}</td>
                  <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D] dark:text-gray-300">${item.transId}</td>
  
                  {/* <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-normal text-[#737373]">{item.type}</td> */}
  
                  <td className="font-jakarta-sans w-48 md:w-30 p-4 tracking-wide whitespace-nowrap text-base font-medium text-[#3A3F51] flex items-center gap-2 dark:text-gray-300">
                    <h2>{item.user}</h2>
                  </td>
                  <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-normal dark:text-gray-300" style={{ color: `${item.color}` }}>{item.status}</td>
                  <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D] dark:text-gray-300">${item.amount}</td>
                  <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-[14px] font-normal text-[#0D062D] dark:text-gray-300">View</td>
                </tr>
              ))}
            </tbody>
          </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default DepositTable;
