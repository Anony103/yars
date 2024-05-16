import React, { useState } from 'react';

const FilterPeriod = ({ periods, selectedPeriod, onSelectPeriod }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePeriodSelect = (period) => {
    onSelectPeriod(period);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {selectedPeriod.label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.7-.29l-3-3a1 1 0 111.41-1.42L10 10.59l2.29-2.3a1 1 0 111.42 1.42l-3 3a1 1 0 01-.71.29z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {periods.map((period) => (
              <button
                key={period.id}
                onClick={() => handlePeriodSelect(period)}
                className={`${
                  period.id === selectedPeriod.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                } block w-full text-left px-4 py-2 text-sm`}
                role="menuitem"
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPeriod;
