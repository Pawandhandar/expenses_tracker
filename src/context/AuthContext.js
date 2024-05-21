import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService';
import '/index.js';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {
      setIsAuthenticated(data.isAuthenticated);
      setUser(data.user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
