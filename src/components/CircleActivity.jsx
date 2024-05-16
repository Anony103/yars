import React from 'react';

const CircleActivity = ({ percentage, wid }) => {
  const size = 200;
  const radius = (size - wid) / 2;
  const centerX = size / 2;
  const centerY = size / 2;
  const circumference = 2 * Math.PI * radius;
  const activeCircumference = (percentage / 100) * circumference;
  const inactiveCircumference = circumference - activeCircumference;

  return (
    <div className="relative">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          strokeWidth={40}
          fill="transparent"
          stroke="#d47e1c"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          strokeWidth={40}
          fill="transparent"
          stroke="#00C48C"
          strokeDasharray={`${activeCircumference} ${inactiveCircumference}`}
          strokeDashoffset={circumference - activeCircumference}
          strokeLinecap="round"
          transform={`rotate(-90 ${centerX} ${centerY})`}
        />
      </svg>
    </div>
  );
};

export default CircleActivity;
