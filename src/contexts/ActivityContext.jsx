import React, { createContext, useState, useEffect } from 'react';
import activityService from '../services/activityService';

export const ActivityContext = createContext();

const ActivityContextProvider = ({ activityId, children }) => {
  const [activityData, setActivityData] = useState('');

  const getActivityData = () => {
    return activityService.getOne(activityId);
  };

  useEffect(() => {
    getActivityData().then((data) => setActivityData(data));
  }, []);

  return (
    <ActivityContext.Provider value={activityData}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
