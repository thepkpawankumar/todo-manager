import React from 'react'
import { Navigate  } from 'react-router-dom'
import * as ROUTES from '../constants/routes';
import withAuthentication from '../components/Session/withAuthentication'
function RequireAuth({ children }) {
  let isLoggedin = localStorage.getItem("isLoggedin");

  return isLoggedin ? children : <Navigate to={ROUTES.SIGN_IN} replace />;
}

export default withAuthentication(RequireAuth);