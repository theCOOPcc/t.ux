import React, { useState, useEffect, createContext } from 'react';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [sessionData, setSessionData] = useEffect('');

  return (
    <SessionContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
