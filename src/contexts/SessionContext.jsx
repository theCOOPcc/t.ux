import React, { useState, useEffect, createContext, useContext } from 'react';
import activityService from '../services/activityService';
import { UserContext } from './UserContext';
export const SessionContext = createContext();

const SessionContextProvider = ({ children, activityId }) => {
  const [sessionData, setSessionData] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  const [completed, setCompleted] = useState('-10');

  const { user } = useContext(UserContext);

  // Set Activity from Database
  const getActivityData = async () => {
    return await activityService.getOne(activityId);
  };

  // !Get and set data to state, set initial section and module indexes. Fires once on render and does not have any update dependencies.
  useEffect(() => {
    getActivityData().then((data) => startSessionTracking(data));
  }, []);

  const currentSection =
    sessionData && sessionData.sections[currentSectionIndex];
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
    resetModuleIndex();
  };

  const resetModuleIndex = async () => {
    await setCurrentModuleIndex(0);
  };

  const incrementModuleIndex = async () => {
    await setCurrentModuleIndex(currentModuleIndex + 1);
  };

  const handleCurrentSection = () => {
    completeSection();
    incrementCurrentSection();

    convertIndexToPercent(currentSectionIndex);
  };

  const updateCurrentModule = async () => {
    touchSection();
    touchModule()
    completeModule();
    await incrementModuleIndex();
    console.log('currentModule', currentModule);
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
  const buildInitialSections = (sections) => {
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

  const buildInitialSessionObject = (activityData) => {
    // const { _id, firstName, lastName } = user;
    const { name, sections } = activityData;
    const initialSections = buildInitialSections(sections);

    const session = {
      // userId: _id,
      // userName: `${firstName} ${lastName}`,
      activityId: activityId,
      activityName: name,
      totalSessionTime: null,
      sections: initialSections,
    };
    return session;
  };

  const startSessionTracking = (activityData) => {
    const initialSessionObject = buildInitialSessionObject(activityData);
    setSessionData(initialSessionObject);
  };

  // todo: Write these functions to track session.
  const touchSection = () => {
    const updateSessionData = { ...sessionData };
    updateSessionData.sections[currentSectionIndex].touched = true;
    setSessionData(updateSessionData);
  };
  // !working
  const completeSection = () => {
    const updateSessionData = { ...sessionData };
    updateSessionData.sections[currentSectionIndex].completed = true;
    setSessionData(updateSessionData);
  };
  const touchModule = () => {
    const updateSessionData = { ...sessionData };
    updateSessionData.sections[currentSectionIndex].modules[
      currentModuleIndex
    ].touched = true;
    setSessionData(updateSessionData);
  };
  const completeModule = () => {
    const updateSessionData = { ...sessionData };
    updateSessionData.sections[currentSectionIndex].modules[
      currentModuleIndex
    ].completed = true;
    setSessionData(updateSessionData);
  };

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
        touchModule,
        touchSection,
        completeModule,
        completeSection,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
