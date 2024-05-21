import React from 'react';

const CircleProgressBar = ({ percentage, wid }) => {
  const size = 200;
  const radius = (size - wid) / 2;
  const centerX = size / 2;
  const centerY = size / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          strokeWidth={20}
          fill="transparent"
          className="stroke-gray-300 dark:stroke-gray-600"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          strokeWidth={20}
          fill="transparent"
          className="stroke-green-500"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${centerX} ${centerY})`}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="20"
          className="fill-gray-900 dark:fill-gray-200"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircleProgressBar;
