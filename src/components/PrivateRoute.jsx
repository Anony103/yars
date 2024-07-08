import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../config/AuthContext';

const PrivateRoute = ({ roles }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && (!user.role || !roles.includes(user.role))) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
