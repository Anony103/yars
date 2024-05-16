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
        return (
          <AllTransactionTable/>
        );
      case 'deposit':
        return (
          <DepositTable/>
        );
      case 'wallet':
        return (
          <WalletTable/>
        );
      case 'orders':
        return (
          <OrderTable/>
        );
      case 'withdrawals':
        return (
          <WithdrawalsTable/>
        );
      case 'wallet2wallet':
        return (
          <W2WTable/>
        );
      default:
        return (
          <DiscountTable/>
        );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center border-b">
        <button
          onClick={() => handleOptionChange('allTransactions')}
          className={`mx-2 py-2 ${selectedOption === 'allTransactions' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          All Transactions
        </button>
        <button
          onClick={() => handleOptionChange('deposit')}
          className={`mx-2 py-2 ${selectedOption === 'deposit' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          Deposit
        </button>
        <button
          onClick={() => handleOptionChange('wallet')}
          className={`mx-2 py-2 ${selectedOption === 'wallet' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          Wallet
        </button>
        <button
          onClick={() => handleOptionChange('orders')}
          className={`mx-2 py-2 ${selectedOption === 'orders' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          Orders
        </button>
        <button
          onClick={() => handleOptionChange('withdrawals')}
          className={`mx-2 py-2 ${selectedOption === 'withdrawals' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          Withdrawals
        </button>
        <button
          onClick={() => handleOptionChange('wallet2wallet')}
          className={`mx-2 py-2 ${selectedOption === 'wallet2wallet' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          Wallet 2 Wallet
        </button>
        <button
          onClick={() => handleOptionChange('discount')}
          className={`mx-2 py-2 ${selectedOption === 'discount' ? 'text-[#D8541B] border-[#D8541B] border-b' : 'bg-white text-black'}`}
        >
          Discount
        </button>

      </div>
      {render()}
    </div>
  );
};

export default RenderItem;
