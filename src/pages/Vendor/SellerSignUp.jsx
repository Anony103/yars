import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
import { UserAuth } from '../../config/AuthContext';

const SellerSignUp = () => {
  const { signUpUser } = UserAuth();

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign up</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            address: '',
          }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await signUpUser(values.email, values.password, {
                displayName: values.name,
                address: values.address,
              });
              setSubmitting(false);
            } catch (error) {
              setErrors({ submit: error.message });
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form className="w-full">
              <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="name">Full name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder='Full name'
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="email">Email Address</label>
                <Field
                  type="email"
                  name="email"
                  placeholder='mailname@example.com'
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="address">Address</label>
                <Field
                  type="text"
                  name="address"
                  placeholder='123 Main St'
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
              </div>
              {errors.submit && <div className="text-red-500 text-sm mb-4">{errors.submit}</div>}
              <div className="mb-4">
                <button type="submit" className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SellerSignUp;
