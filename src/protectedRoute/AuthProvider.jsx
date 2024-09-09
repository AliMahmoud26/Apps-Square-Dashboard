// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user is already logged in from localStorage
    const user = localStorage.getItem('user');
    return user ? true : false;
  });

  const login = (email, password) => {
    // Check credentials
    if (email === 'alimahmoud.cs@outlook.com' && password === 'AliMahmoud123') {
      const userInfo = { email, password };
      localStorage.setItem('user', JSON.stringify(userInfo));
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
