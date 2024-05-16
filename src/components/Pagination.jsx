import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1, '...');
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...', totalPages);
      }
    }
    
    return pageNumbers;
  };
  

  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={`flex gap-2 px-3 py-1 rounded-md ${currentPage > 1 ? 'bg-[#4BA457] text-white cursor-pointer' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
        disabled={currentPage === 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

        Previous
      </button>
      <div className="flex space-x-1">
        {generatePageNumbers().map((pageNumber, index) =>
          typeof pageNumber === 'number' ? (
            <button
              key={index}
              onClick={() => onPageChange(pageNumber)}
              className={`px-3 py-1 rounded-md ${currentPage === pageNumber ? 'bg-[#D8541B] text-white' : 'border'}`}
            >
              {pageNumber}
            </button>
          ) : (
            <span key={index} className="px-3 py-1">
              {pageNumber}
            </span>
          )
        )}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className={`flex gap-2 px-3 py-1 rounded-md ${currentPage < totalPages ? 'bg-[#D8541B] text-white cursor-pointer' : 'border text-gray-500 cursor-not-allowed'}`}
        disabled={currentPage === totalPages}
      >
        Next
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>


      </button>
    </div>
  );
};

export default Pagination;
