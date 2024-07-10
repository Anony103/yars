import React from 'react';
import pic from '../assets/pic.png';

const CustomerProfiles = ({customer}) => {
  return (
    <div className="flex-2 px-5 py-4 border-2 border-[#EDF2F7] dark:border-gray-700 shadow-sm rounded-2xl w-full lg:w-3/5 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-200">Customer Profile</h2>
      <div className="flex flex-col items-center py-6">
        <div className="w-full">
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-200">Basic Information</h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col space-y-2 w-full md:w-2/3">
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Name:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">{customer.fullName}</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Gender:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">Male</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Email:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">{customer.email}</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Phone No:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">{customer.phoneNumber || "08012345678"}</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Address:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">{customer.address ||'1, Check Street, Ibadan, Nigeria'}</p>
              </div>
            </div>
            <img src={pic} alt="User" className="w-24 h-24 rounded-full mb-4 md:mb-0" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-12">
          <div className="w-full md:w-1/2 md:pr-4">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-200">Bank Information</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Bank Name:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">Opay Bank</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Account Number:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">2085209073</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-200">Other Information</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Date Registered:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">01-05-2023 at 11:34 PM</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Last Seen:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">Yesterday at 09:04 AM</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3 text-gray-900 dark:text-gray-300">Account Status:</h4>
                <p className="w-2/3 text-gray-700 dark:text-gray-400">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfiles;
