import { useState } from 'react';
import { AiOutlineMoon } from 'react-icons/ai';
import { IoIosSunny } from 'react-icons/io';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(prev => !prev);
    document.body.classList.toggle('dark');
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer gap-2">
        <span>
          {isChecked ? <IoIosSunny className="w-6 h-6 text-yellow-400" /> : <AiOutlineMoon className="w-6 h-6" />}
        </span>
        <h2 className="hidden md:flex font-normal dark:text-white font-dm hide-on-small">Dark Theme</h2>
        <span className="hidden md:flex relative">
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
                isChecked ? 'translate-x-5 bg-yellow-400' : 'translate-x-0 bg-white'
              } absolute left-0 inline-block w-5 h-5 transform rounded-full transition-transform duration-300 ease-in-out`}
            ></span>
          </span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
