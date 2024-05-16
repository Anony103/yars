import React from 'react';
import { platform } from '../../data';

const SaleReport = () => {
  return (
    <section className="w-full md:w-2/5 px-4 border-2 border-[#EDF2F7] shadow-sm rounded-2xl bg-white mb-8 md:mb-0">
      <div className="flex justify-between items-center py-4 pr-6">
        <h2 className='font-jakarta-sans font-semibold lg-text-[18px] text-[#26282C]'>Top Platform</h2>
        <h2 className="cursor-pointer font-jakarta-sans font-medium pl-4 lg-text-[18px] text-[#34CAA5]">See All</h2>
      </div>
      <div>
        {platform.map((saving) => (
          <div className="mb-6" key={saving.id}>
            <div className="mb-2">
              <p className="font-jakarta-sans text-[18px] font-semibold text-[#22242C]">{saving.title}</p>
            </div>
            <div className="bg-[#F5F5F5] h-3 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full`}
                style={{ width: `${saving.percent}%`, backgroundColor:`${saving.color}`}}
              ></div>
            </div>
            <div className="flex items-center justify-between mt-2 p-2 rounded-md">
              <span className="text-[#525252] font-jakarta-sans text-[18px] font-normal">${saving.amount}</span>
              <span className="text-[#525252] font-jakarta-sans text-[18px] font-normal">+{saving.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaleReport;
