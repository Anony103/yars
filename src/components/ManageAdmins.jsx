// src/components/ManageAdmins.js
import React from 'react';
import { BsPerson } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

const ManageAdmins = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Register New Administrator</h2>
        <p className="mb-6">Fill in the form below to register a new administrator.</p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-gray-700">First Name</label>
              <div className="flex items-center border rounded-lg p-2">
                <BsPerson className="text-gray-500 mr-2"/>
                <input type="text" placeholder="Enter first name" className="w-full focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Last Name</label>
              <div className="flex items-center border rounded-lg p-2">
              <BsPerson className="text-gray-500 mr-2"/>
                <input type="text" placeholder="Enter last name" className="w-full focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Gender</label>
              <div className="flex items-center border rounded-lg p-2">
                <span className="text-gray-500 mr-2">⚥</span>
                <select className="w-full focus:outline-none">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Role</label>
              <div className="flex items-center border rounded-lg p-2">
                <span className="text-gray-500 mr-2">🛡</span>
                <select className="w-full focus:outline-none">
                  <option>Select Administrator Role</option>
                  <option>Admin</option>
                  <option>Super Admin</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Phone Number</label>
              <div className="flex items-center border rounded-lg p-2">
              <MdOutlinePhone className="text-gray-500 mr-2"/>
                <input type="text" placeholder="e.g. 08012345678" className="w-full focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email Address</label>
              <div className="flex items-center border rounded-lg p-2">
              <MdMailOutline className="text-gray-500 mr-2"/>
                <input type="email" placeholder="example@domain.com" className="w-full focus:outline-none" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Be sure to enter a functional email address.</p>
            </div>
          </div>
          <button type="submit" className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">Register New Admin</button>
        </form>
      </div>
    </div>
  );
};

export default ManageAdmins;
