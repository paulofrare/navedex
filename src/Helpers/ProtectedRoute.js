import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);
  const loged = window.localStorage.getItem('token') || login ? true : false;

  if (loged === true) return <Route {...props} />;
  else if (loged === false) return <Redirect to="/login" />;
  else return null;
};

export default ProtectedRoute;
