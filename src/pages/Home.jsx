import React from 'react';
import BarChart from '../components/CustomBarChart';
import Wiget from '../components/Wiget';
import TransactionInsight from '../components/TransactionInsight';
import Performance from '../components/Performance';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
      <div className='w-full'>
        <div className='flex flex-col p-5 '>
        <Wiget/>
        </div>
        <div className='flex flex-col lg:flex-row p-5 gap-2'>
          <BarChart/>
          <TransactionInsight wid={50}/>
        </div>
        <div className='flex flex-col md:flex-row p-5 gap-2'>
      <Performance />
      <Reviews rating={3} />
    </div>
      </div>
  );
};

export default Home;
