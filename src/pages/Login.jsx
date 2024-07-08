import React, { useEffect, useState } from 'react';
import contain from '../assets/loginIcon.svg';
import { UserAuth } from '../config/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Login = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { authenticateUserWithEmailPassword, user } = UserAuth();
  const navigate = useNavigate();


  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="flex h-full w-full bg-white">
        <div className="hidden md:flex md:w-2/5 h-full items-center justify-center bg-[#FFFBFB] border-r">
          <img
            src={contain}
            alt="Illustration"
            className="w-96 h-96 object-contain"
          />
        </div>
        <div className="w-full md:w-3/5 h-full p-8 flex flex-col justify-center">
          <h1 className="text-xl font-bold mb-8 text-center">YARS MARKETPLACE</h1>
          <div className='flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden px-20 pt-20 pb-28'>
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Welcome Back!</h2>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={yup.object({
                email: yup.string().email('Must be a valid email').required('Email is required'),
                password: yup.string().required('Password is required'),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  console.log(values);
                  await authenticateUserWithEmailPassword(values.email, values.password);
                  setMessage('Login successful');
                  setSubmitted(true);
                  resetForm();
                  navigate('/');
                } catch (error) {
                  setMessage(`Error: ${error.message}`);
                  setSubmitted(true);
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full max-w-xs md:max-w-md">
                  <div className="mb-4 w-full">
                    <label className="block text-gray-700 mb-1" htmlFor="email">Email Address</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder='mailname@example.com'
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-4 w-full">
                    <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    <div className="flex justify-end mt-2">
                      <a href="#" className="text-sm text-orange-600 hover:underline">Forgot password?</a>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-200"
                  >
                    Sign In
                  </button>
                </Form>
              )}
            </Formik>
            {message && <div className="mt-4 text-center text-red-500">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
