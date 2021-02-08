import React, { createContext, useState, useEffect } from 'react';
import activityService from '../services/activityService';

export const ActivityContext = createContext();

const ActivityContextProvider = ({ activityId, children }) => {
  const [activityData, setActivityData] = useState('');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  const [completed, setCompleted] = useState('-10');



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
