import React, { useState, useEffect, createContext, useContext } from 'react';
import { ActivityContext } from './ActivityContext';
import { UserContext } from './UserContext';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState(null);
  const [currentSessionModule, setCurrentSessionModule] = useState(null);
  const [currentSessionSection, setCurrentSessionSection] = useState(null);

  const {
    name: activityName,
    time: activityTime,
    setStarted,
    _id: activityId,
    sections,
  } = useContext(ActivityContext);
  const { user } = useContext(UserContext);

  // !This function builds the initial session object, which will be pushed to the session context when the Begin button is clicked.
  const buildInitialSessionObject = () => {
    const { _id, firstName, lastName } = user;
    const session = {
      userId: _id,
      userName: `${firstName} ${lastName}`,
      activityId: activityId,
      activityName: activityName,
      totalSessionTime: null,
    };
    return session;
  };

  const startSessionTracking = () => {
    const initialSessionObject = buildInitialSessionObject();
    setSessionData(initialSessionObject);
  };

  return (
    <SessionContext.Provider
      value={{
        sessionData,
        setSessionData,
        setCurrentSessionModule,
        currentSessionModule,
        setCurrentSessionSection,
        currentSessionSection,
        // sections,
        startSessionTracking,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
