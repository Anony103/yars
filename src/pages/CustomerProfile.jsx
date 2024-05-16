import React from 'react';
import { customers } from '../../data';
import { useParams } from 'react-router-dom';
import Wiget from '../components/Wiget';
import CustomerProfiles from '../components/CustomerProfiles';
import TransactionInsight from '../components/TransactionInsight';
import TransactionTable from '../components/TransactionTable';

const CustomerProfile = () => {
  const { id } = useParams();
  console.log(id);

  const customer = customers.find((item) => item.id === id);

  return (
    <div className='w-full flex flex-col p-5 gap-2'>
      <div className='flex flex-col  '>
        <Wiget />
      </div>
      
      <div className='flex flex-col lg:flex-row  gap-2'>
          {/* {customer && (
            <CustomerProfiles
              name={customer.name}
              gender={customer.gender}
              email={customer.email}
              phoneNo={customer.phoneNo}
              role={customer.role}
              joined={customer.joined}
            />
          )} */}
          <CustomerProfiles/>
            <TransactionInsight wid={90} />
      </div>
      <div>
        <TransactionTable/>
      </div>
    </div>
  );
};

export default CustomerProfile;
