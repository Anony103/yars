import React from 'react';
import { vendorReport } from '../../data';

const VendorWidget = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:flex-wrap lg:flex-nowrap">
      {vendorReport.map((item, index) => (
        <div className="flex flex-col w-full md:w-[48%] px-8 py-12 border-2 border-[#EDF2F7] dark:border-gray-700 shadow-sm rounded-2xl bg-white dark:bg-gray-800 gap-2.5" key={index}>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <span className="font-jakarta-sans font-medium text-[18px] text-gray-500 dark:text-gray-400">{item.title}</span>
              <span className="font-jakarta-sans text-[24px] font-semibold text-[#3A3F51] dark:text-white">{item.sign}{item.amount}</span>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <span className="text-xs font-jakarta-sans font-medium dark:text-gray-300">{item.percent}</span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                <img src={item.icon} alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VendorWidget;
