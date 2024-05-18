import React from 'react';
import BarChart from '../components/BarCharts';
import Wiget from '../components/Wiget';
import TransactionInsight from '../components/TransactionInsight';
import AllCustomers from '../components/AllCustomers';
import CustomerActivity from '../components/CustomerActivity';

const Customer = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-col p-5'>
        <Wiget/>
        </div>
        <div className='flex flex-col lg:flex-row p-5 gap-5'>
          <div className='lg:w-2/5'>
          <AllCustomers/>
          </div>
          <div className='flex flex-col gap-2 lg:w-3/5'>
            <div className='flex flex-col md:flex-row gap-2'>
           <CustomerActivity  />
           <TransactionInsight wid={90}/>
            </div>
            <div>
              <BarChart/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Customer
