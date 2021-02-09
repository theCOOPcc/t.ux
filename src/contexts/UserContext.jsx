import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';
import userService from '../services/userService';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const userProfile = await userService.getCurrentUser();
    setUser(userProfile);
  };

  const handleLogout = async () => {
    setUser(null);
    authService.logoutFromGoogle();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user: user, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
