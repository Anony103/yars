import React from 'react';
import VendorWidget from '../components/VendorWidget';
import AllCustomers from '../components/AllCustomers';
import CustomerActivity from '../components/CustomerActivity';
import TransactionInsight from '../components/TransactionInsight';
import Table from '../components/Table'

const Vendors = () => {
  return (
   <div className='w-full'>
    <div className='flex flex-col p-5 '>
        <VendorWidget/>
        </div>

        <div className='flex flex-col md:flex-row p-5 gap-2'>
          <AllCustomers/>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col lg:flex-row gap-2'>
           <CustomerActivity  />
           <TransactionInsight wid={90}/>
            </div>
            <div>
              <Table/>
            </div>
          </div>
        </div>
   </div>
  )
}

export default Vendors
