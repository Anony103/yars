import React from 'react';
import avatar from '../assets/avatar.png';
import { order } from '../../data';

const Table = () => {
  return (
    <section className="w-full">
      <div className="px-5 border-2 border-[#EDF2F7] shadow-sm rounded-2xl bg-white">
        <section className='flex flex-row justify-between items-center py-4 pr- lg-pr-4'>
          <h2 className='font-jakarta-sans font-semibold pl-4 lg-text-[18px] text-[#26282C]'>Last Order</h2>
          <h2 className='font-jakarta-sans font-medium pl-4 lg-text-[18px] text-[#34CAA5]'>See All</h2>
        </section>
        <div className='overflow-auto'>

        <table className="w-full">
          <thead>
            <tr className='border-b'>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] md:table-cell">Name</th>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] md:table-cell">Date</th>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] md:table-cell">Amount</th>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] md:table-cell">Status</th>
              <th className="font-jakarta-sans p-3 text-left tracking-wide whitespace-nowrap  text-base font-medium text-[#9CA4AB] md:table-cell">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => (
              <tr className='border-b' key={index}>
                <td className="font-jakarta-sans w-48 md:w-30 p-4 tracking-wide whitespace-nowrap text-base font-medium text-[#3A3F51] flex items-center gap-2">
                  <img src={avatar} alt="" />
                  <h2>{item.name}</h2>
                </td>
                <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-normal text-[#737373]">{item.date}</td>
                <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-medium text-[#0D062D]">${item.amount}</td>
                <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-base font-normal" style={{ color: `${item.color}` }}>{item.status}</td>
                <td className="font-jakarta-sans p-3 tracking-wide whitespace-nowrap text-[14px] font-normal text-[#0D062D]">View</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

      </div>
    </section>
  );
};

export default Table;
