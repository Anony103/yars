import React, { useState } from 'react';
import { transactions } from '../../data';
import Pagination from './Pagination';
import TransactionDetailsModal from './TransactionDetailsModal';

const ITEMS_PER_PAGE = 10;

const AllTransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleTransactions = transactions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b dark:border-gray-700">
            <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] dark:text-gray-400">S/N</th>
            <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] dark:text-gray-400">Transaction ID</th>
            <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] dark:text-gray-400">Type</th>
            <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] dark:text-gray-400">User</th>
            <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] dark:text-gray-400">Status</th>
            <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] dark:text-gray-400">Amount(₦)</th>
            <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] dark:text-gray-400">Action</th>
          </tr>
        </thead>
        <tbody>
          {visibleTransactions.map((item, index) => (
            <tr className="border-b dark:border-gray-700" key={index}>
              <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D] dark:text-gray-300">{item.id}</td>
              <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D] dark:text-gray-300">${item.transId}</td>
              <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-normal text-[#737373] dark:text-gray-400">{item.type}</td>
              <td className="font-jakarta-sans w-48 md:w-30 p-4 tracking-wide whitespace-nowrap text-base font-medium text-[#3A3F51] dark:text-gray-300 flex items-center gap-2">
                <h2>{item.user}</h2>
              </td>
              <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-normal" style={{ color: `${item.color}` }}>{item.status}</td>
              <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D] dark:text-gray-300">${item.amount}</td>
              <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-[14px] font-normal text-[#0D062D] dark:text-gray-300">
                <button onClick={openModal} className="border text-black dark:text-gray-300 px-4 py-2 rounded-md hover:bg-[#D8541B] hover:text-white">
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <TransactionDetailsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AllTransactionTable;
