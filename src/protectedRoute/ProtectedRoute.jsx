// ProtectedRoute.js
import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/sign-up" />;
  }

  return children;
};

export default ProtectedRoute;
