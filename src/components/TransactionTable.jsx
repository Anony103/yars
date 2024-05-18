import React, { useState, useMemo } from 'react';
import { transactions } from '../../data';
import Pagination from './Pagination';
import TransactionModal from './TransactionModal';


const ITEMS_PER_PAGE = 5;

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTransactions = useMemo(() => transactions.slice(startIndex, endIndex), [
    startIndex,
    endIndex,
  ]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

  };

  const downloadCSV = () => {
    const csvData = [
      ['ID', 'Transaction ID', 'User', 'Status', 'Amount(₦)'],
      ...currentTransactions.map((transaction) => [
        transaction.id,
        transaction.transId,
        transaction.user,
        transaction.status,
        transaction.amount,
      ]),
    ]
      .map((e) => e.join(','))
      .join('\n');
  
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'transactions.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };
  

  return (
    <div className="overflow-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">Recent Transactions</h1>
        <div
          className="flex gap-2 cursor-pointer"
          onClick={downloadCSV}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <h2 className="text-lg">Download</h2>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] md:table-cell">
                S/N
              </th>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] md:table-cell">
                Events
              </th>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] md:table-cell">
                Dates
              </th>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] md:table-cell">
                Amount(₦)
              </th>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] md:table-cell">
                Status
              </th>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap text-base font-medium text-[#9CA4AB] md:table-cell">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((item, index) => (
              <tr className="border-b" key={index}>
                <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D]">
                  {item.id}
                </td>
                <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D]">
                  {item.transId}
                </td>
                <td className="font-jakarta-sans w-48 md:w-30 p-4 tracking-wide whitespace-nowrap text-base font-medium text-[#3A3F51] flex items-center gap-2">
                  <h2>{item.user}</h2>
                </td>
                <td
                  className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-normal"
                  style={{ color: `${item.color}` }}
                >
                  {item.status}
                </td>
                <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D]">
                  {item.amount}
                </td>
                <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-[14px] font-normal text-[#0D062D]">
                <button className='border px-2 rounded-md' onClick={handleProfileClick}>
                  more
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <TransactionModal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </div>
  );
};

export default TransactionTable;
