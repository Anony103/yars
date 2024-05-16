import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;

    return (
      <div className="relative">
        <div className="font-jakarta-sans text-3 px-[15px] rounded-lg py-[5px] bg-black text-white">
          <p className="label">{`${value}`}</p>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-style-solid border-width-0 border-color-transparent border-t-5 border-black"></div>
        </div>
      </div>
    );
  }

  return null;
};


const BarCharts = () => {
  const yAxisTicks = [0, 2500, 5000, 7500, 10000];

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex-3 px-5 py-4 border-2 border-[#EDF2F7] shadow-sm rounded-2xl w-full bg-white">
      <div className=" text-gray-500 flex flex-row items-center justify-between px-2 mb-4">
        <h1 className='font-jakarta-sans text-[#26282C] font-semibold text-[18px] font-medium'>Customer Map</h1>
        <div className='flex items-center gap-2'>
          <select id="dropdown" value={selectedOption} onChange={handleChange} className="font-jakarta-sans font-normal border border-[#E1DFDF] text-3 py-2 px-2 rounded-lg focus:outline-none">
            <option value="option1">Monthly</option>
            <option value="">Yearly</option>
            <option value="option2">Weekly</option>
            <option value="option3">Daily</option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>

        </div>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart width="100%" height={1000} data={data} barCategoryGap={20} barGap={5}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" className='font-jakarta-sans text-[14px] font-semibold text-[#525252]'/>
          <YAxis ticks={yAxisTicks} className='font-jakarta-sans text-[12px] font-semibold text-[#525252]'/>
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={<CustomTooltip />}
          />
          <Legend />
          <Bar type="monotone" dataKey="pv" fill="#8884d8" />
          <Bar type="monotone" dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
