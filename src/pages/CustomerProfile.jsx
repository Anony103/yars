import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserAuth } from '../config/AuthContext';
import Wiget from '../components/Wiget';
import CustomerProfiles from '../components/CustomerProfiles';
import TransactionInsight from '../components/TransactionInsight';
import TransactionTable from '../components/TransactionTable';

const CustomerProfile = () => {
  const { id } = useParams();
  const { fetchCustomerById } = UserAuth();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const fetchedCustomer = await fetchCustomerById(id);
        setCustomer(fetchedCustomer);
      } catch (error) {
        console.error('Error fetching customer:', error);
        setCustomer(null);
      }
    };

    getCustomer();
  }, [id, fetchCustomerById]);

  useEffect(() => {
    console.log('Customer:', customer);
  }, [customer]);

  if (customer === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full flex flex-col p-5 gap-2'>
      <div className='flex flex-col'>
        <Wiget />
      </div>
      <div className='flex flex-col lg:flex-row gap-2'>
        <CustomerProfiles customer={customer} />
        <TransactionInsight wid={90} />
      </div>
      <div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default CustomerProfile;
