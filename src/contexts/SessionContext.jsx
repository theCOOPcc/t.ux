import React, { useState, useEffect, createContext } from 'react';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState(null);
  const [currentSessionModule,setCurrentSessionModule] = useState(null)
  const [currentSessionSection, setCurrentSessionSection] = useState(null)

  
  return (
    <SessionContext.Provider value={{ sessionData, setSessionData, setCurrentSessionModule, currentSessionModule }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
