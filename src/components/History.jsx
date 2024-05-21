import React, { useState } from 'react';
import AllTransactionTable from './AllTransactionTable';
import DepositTable from './DepositTable';
import WalletTable from './WalletTable';
import DiscountTable from "./DiscountTable";
import HistoryTable from './HistoryTable';



const Hisory = () => {
  const [selectedOption, setSelectedOption] = useState('allOrders');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const render = () => {
    switch (selectedOption) {
      case 'allOrders':
        return (
          <HistoryTable/>
        );
      case 'pending':
        return (
          <HistoryTable/>
        );
      case 'completed':
        return (
          <HistoryTable/>
        );
      default:
        return (
          <HistoryTable/>
        );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center border-b mb-4">
        <button
          onClick={() => handleOptionChange('allOrders')}
          className={`mx-2 py-2 ${selectedOption === 'allOrders' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          All Orders
        </button>
        <button
          onClick={() => handleOptionChange('pending')}
          className={`mx-2 py-2 ${selectedOption === 'pending' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          Pending
        </button>
        <button
          onClick={() => handleOptionChange('completed')}
          className={`mx-2 py-2 ${selectedOption === 'completed' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          Completed
        </button>
        <button
          onClick={() => handleOptionChange('cancelled')}
          className={`mx-2 py-2 ${selectedOption === 'cancelled' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          Cancelled
        </button>
      </div>
      {render()}
    </div>
  );
};

export default Hisory;
