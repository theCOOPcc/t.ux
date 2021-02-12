import React, { useState, useEffect, createContext, useContext } from 'react';
import activityService from '../services/activityService';

import { UserContext } from './UserContext';

export const SessionContext = createContext();

const SessionContextProvider = ({ children, activityId }) => {
  const [activityData, setActivityData] = useState('');
  const [sessionData, setSessionData] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  const [completed, setCompleted] = useState('-10');

  const { user } = useContext(UserContext);

  // Set Activity from Database
  const getActivityData = () => {
    return activityService.getOne(activityId);
  };

  useEffect(() => {
    getActivityData().then((data) => setActivityData(data));
  }, []);

  // Activity Variables
  const { activityName } = activityData;

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
  const buildInitialSections = () => {
    const initialSections = [...sections];
    // ! iterate through sections and modules,  add touched and completed property, set to false.
    initialSections.forEach((section, index) => {
      const { modules } = section;
      section.touched = false;
      section.completed = false;
      modules.forEach((module, index) => {
        module.touched = false;
        module.completed = false;
      });
    });
    initialSections[0].touched = true;
    initialSections[0].modules[0].touched = true;
    return initialSections;
  };

  const buildInitialSessionObject = () => {
    const { _id, firstName, lastName } = user;
    const initialSections = buildInitialSections();

    const session = {
      userId: _id,
      userName: `${firstName} ${lastName}`,
      activityId: activityId,
      activityName: activityName,
      totalSessionTime: null,
      sections: initialSections
    };
    return session;
  };

  const startSessionTracking = () => {
    const initialSessionObject = buildInitialSessionObject();
    setSessionData(initialSessionObject);
  };

  // todo: Write these functions to track session.
  // const touchSection = () => {}
  // const completeSection = () => {}
  // const touchModule = () => {}
  // const completeModule = () => {}

  return (
    <SessionContext.Provider
      value={{
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
        startSessionTracking,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
