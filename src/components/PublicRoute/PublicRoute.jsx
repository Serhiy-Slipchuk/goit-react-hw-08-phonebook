import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/auth/authSelectors';

const PublicRoute = function ({ children }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;
