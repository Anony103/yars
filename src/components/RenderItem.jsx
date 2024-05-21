import React, { useState } from 'react';
import AllTransactionTable from './AllTransactionTable';
import DepositTable from './DepositTable';
import WalletTable from './WalletTable';
import OrderTable from "./OrderTable";
import WithdrawalsTable from './WithdrawalsTable'
import W2WTable from './W2WTable'
import DiscountTable from "./DiscountTable";

const RenderItem = () => {
  const [selectedOption, setSelectedOption] = useState('allTransactions');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const render = () => {
    switch (selectedOption) {
      case 'allTransactions':
        return <AllTransactionTable />;
      case 'deposit':
        return <DepositTable />;
      case 'wallet':
        return <WalletTable />;
      case 'orders':
        return <OrderTable />;
      case 'withdrawals':
        return <WithdrawalsTable />;
      case 'wallet2wallet':
        return <W2WTable />;
      default:
        return <DiscountTable />;
    }
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between items-center border-b dark:border-gray-700">
        <button
          onClick={() => handleOptionChange('allTransactions')}
          className={`mx-2 py-2 ${selectedOption === 'allTransactions' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'text-black dark:text-white'}`}
        >
          All Transactions
        </button>
        <button
          onClick={() => handleOptionChange('deposit')}
          className={`mx-2 py-2 ${selectedOption === 'deposit' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'text-black dark:text-white'}`}
        >
          Deposit
        </button>
        <button
          onClick={() => handleOptionChange('wallet')}
          className={`mx-2 py-2 ${selectedOption === 'wallet' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'text-black dark:text-white'}`}
        >
          Wallet
        </button>
        <button
          onClick={() => handleOptionChange('orders')}
          className={`mx-2 py-2 ${selectedOption === 'orders' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'text-black dark:text-white'}`}
        >
          Orders
        </button>
        <button
          onClick={() => handleOptionChange('withdrawals')}
          className={`mx-2 py-2 ${selectedOption === 'withdrawals' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'text-black dark:text-white'}`}
        >
          Withdrawals
        </button>
        <button
          onClick={() => handleOptionChange('wallet2wallet')}
          className={`mx-2 py-2 ${selectedOption === 'wallet2wallet' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'text-black dark:text-white'}`}
        >
          Wallet 2 Wallet
        </button>
        <button
          onClick={() => handleOptionChange('discount')}
          className={`mx-2 py-2 ${selectedOption === 'discount' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'text-black dark:text-white'}`}
        >
          Discount
        </button>
      </div>
      {render()}
    </div>
  );
};

export default RenderItem;
