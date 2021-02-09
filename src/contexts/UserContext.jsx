import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={''}>{children}</UserContext.Provider>;
};
