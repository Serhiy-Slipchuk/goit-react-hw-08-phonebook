import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/auth/authSelectors';

const PrivateRoute = function ({ children }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
