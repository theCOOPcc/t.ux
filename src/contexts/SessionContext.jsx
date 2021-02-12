import React, { useState, useEffect, createContext, useContext } from 'react';
import activityService from '../services/activityService';

import { UserContext } from './UserContext';

export const SessionContext = createContext();

const SessionContextProvider = ({ children, activityId }) => {
  const [sessionData, setSessionData] = useState(null);
  const [activityData, setActivityData] = useState('');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  const [completed, setCompleted] = useState('-10');
  // const [currentSessionModule, setCurrentSessionModule] = useState(null);
  // const [currentSessionSection, setCurrentSessionSection] = useState(null);

  const { user } = useContext(UserContext);

  // Set Activity from Database
  const getActivityData = () => {
    return activityService.getOne(activityId);
  };

  useEffect(() => {
    getActivityData().then((data) => setActivityData(data));
  }, []);


  // Activity Variables
  const {activityName} = activityData

  // Variables
  const { sections } = activityData;
  const currentSection = sections && sections[currentSectionIndex];
  const currentModule =
    currentSection && currentSection.modules[currentModuleIndex];

  // Helper Functions
  const handleJumpToSection = (index) => {
    setCurrentSectionIndex(index);
    setCurrentModuleIndex(0);
    convertIndexToPercent(index);
    setStarted(true);
    setFinished(null);
  };

  const incrementCurrentSection = () => {
    setCurrentSectionIndex(currentSectionIndex + 1);
  };

  const handleCurrentSection = () => {
    incrementCurrentSection();
    // Push new section data into section array
    // Reset Module Index to 0
    setCurrentModuleIndex(0);
    // Convert to percentage for Progress Bar
    convertIndexToPercent(currentSectionIndex);
  };

  const updateCurrentModule = () => {
    setCurrentModuleIndex(currentModuleIndex + 1);
  };

  const handleCurrentModule = () => {
    currentModuleIndex < currentSection.modules.length - 1
      ? updateCurrentModule()
      : handleCurrentSection();
  };

  const handleAnswers = (answers) => {
    console.log(answers);
  };

  const convertIndexToPercent = (newIndex) => {
    const index = newIndex - 1;
    const completed = index === 0 ? 0 : `${index}0`;
    setCompleted(completed);
  };

 

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
        ...activityData,
        started,
        finished,
        completed,
        setStarted,
        setFinished,
        currentSection,
        currentModule,
        handleAnswers,
        handleCurrentModule,
        handleCurrentSection,
        handleJumpToSection,
        currentSectionIndex,
        currentModuleIndex,
        sessionData,
        setSessionData,
        // setCurrentSessionModule,
        // currentSessionModule,
        // setCurrentSessionSection,
        // currentSessionSection,
        // sections,
        startSessionTracking,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
