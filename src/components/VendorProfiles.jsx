import React from 'react';
import pic from '../assets/pic.png';

const VendorProfiles = ({vendor}) => {
  return (
    <div className="flex-1 px-5 py-4 border-2 border-[#EDF2F7] shadow-sm rounded-2xl w-full bg-white">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <div className="flex flex-col md:flex-row items-center py-6 w-full">
        <div className="w-full md:w-1/2">
          <h3 className="font-semibold text-lg mb-2">General Information</h3>
          <div className="flex flex-col space-y-2 w-full">
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Brand Name:</h4>
              <p className="w-2/3">{vendor.businessName}</p>
            </div>
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Registered Name:</h4>
              <p className="w-2/3">{vendor.businessName}</p>
            </div>
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">CAC:</h4>
              <p className="w-2/3">1234567</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg mt-4">Outlet Information</h2>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Date Registered:</h4>
                <p className="w-2/3">01-05-2023</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Outlet Location:</h4>
                <p className="w-2/3">{vendor.state}</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Outlet Address:</h4>
                <p className="w-2/3">{vendor.address}</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Phone No:</h4>
                <p className="w-2/3">{vendor.phoneNumber || "08012345678" }</p>
              </div>
              <div className="flex items-center">
                <h4 className="font-medium w-1/3">Email:</h4>
                <p className="w-2/3">{vendor.businessEmail}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <h3 className="font-semibold text-lg mb-2">Outlet Bank Account Details</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Bank Name:</h4>
              <p className="w-2/3">Opay Bank</p>
            </div>
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Account Name:</h4>
              <p className="w-2/3">{vendor.businessName}</p>
            </div>
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Account Number:</h4>
              <p className="w-2/3">2085209073</p>
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 mt-4">Branch Manager’s Information</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Manager Name:</h4>
              <p className="w-2/3">{vendor.name}</p>
            </div>
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Gender:</h4>
              <p className="w-2/3">{vendor.gender || "Female"}</p>
            </div>
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Email:</h4>
              <p className="w-2/3">{vendor.email}</p>
            </div>
            <div className="flex items-center">
              <h4 className="font-medium w-1/3">Phone No:</h4>
              <p className="w-2/3">{vendor.phoneNumber ||"08012345678"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfiles;
