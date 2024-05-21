import React from 'react';
import contain from '../assets/container.png';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden ">
        <div className="hidden md:block md:w-1/2">
          <img
            src={contain}
            alt="Illustration"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Welcome Back!</h2>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                defaultValue="temmyanjous246@gmail.com"
                className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <div className="flex justify-end mt-2">
                <a href="#" className="text-sm text-orange-600 hover:underline">Forgot password?</a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
