import { useState } from 'react';

const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const toggleSwitch = () => {
      setIsChecked(prev => !prev);
      document.body.classList.toggle('dark');
    };
  
    return (
      <div className="flex items-center">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <span className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={toggleSwitch}
            />
            <span className="block w-10 h-5 bg-gray-300 rounded-full">
              <span
                className={`${
                  isChecked ? 'translate-x-4 bg-yellow-400' : 'translate-x-0 bg-white'
                } absolute left-0 inline-block w-6 h-5 transform rounded-full transition-transform duration-300 ease-in-out`}
              ></span>
            </span>
          </span>
        </label>
      </div>
    );
  }
  
  export default ToggleSwitch;
  
