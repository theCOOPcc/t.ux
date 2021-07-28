import React, { useState, useEffect, createContext, useContext } from 'react';
import activityService from '../services/activityService';
import { UserContext } from './UserContext';

export const SessionContext = createContext();

const SessionContextProvider = ({ children, activityId, timerProps }) => {
  const [sessionData, setSessionData] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  // !started and finished are for session tracking.
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  // !completed variable is used for the progress bar.
  const [completed, setCompleted] = useState('-10');
  // !response variable is used to track Question response.
  const [response, setResponse] = useState(null);

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
    setResponse(null);
    convertIndexToPercent(currentSectionIndex);
  };

  const updateCurrentModule = async () => {
    touchSection();
    touchModule();
    completeModule();
    await incrementModuleIndex();
    setResponse(null);
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
    const index = newIndex;
    const completed = index === 0 ? '0' : `${index}0`;
    setCompleted(completed);
  };

  // !This function builds the initial session object, which will be pushed to the session context when the Begin button is clicked.
  const buildInitialSections = (sections) => {
    const initialSections = [...sections];
    // ! iterate through sections and modules,  add touched and completed property, set to false, if the module type is "question" add an empty array called attempts to the module.
    initialSections.forEach((section, index) => {
      const { modules } = section;
      section.touched = false;
      section.completed = false;
      modules.forEach((module, index) => {
        module.touched = false;
        module.completed = false;
        module.type === 'question' && (module.attempts = []);
      });
    });
    initialSections[0].touched = true;
    initialSections[0].modules[0].touched = true;
    return initialSections;
  };

  const buildInitialSessionObject = (activityData) => {
    // const { _id, firstName, lastName } = user;
    const { name, sections, topic } = activityData;
    const initialSections = buildInitialSections(sections);

    const session = {
      // userId: _id,
      // userName: `${firstName} ${lastName}`,
      activityId: activityId,
      activityName: name,
      totalSessionTime: null,
      sections: initialSections,
      topic: topic,
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

  const addAttempt = (details) => {
    console.log(details);
    const updateSessionData = { ...sessionData };
    updateSessionData.sections[currentSectionIndex].modules[
      currentModuleIndex
    ].attempts.push(details);
    setSessionData(updateSessionData);
  };

  const handleResponse = (answer, index) => {
    addAttempt({ selectedAnswer: answer.label, isCorrect: answer.isCorrect });
    setResponse({ selection: answer, selectionIndex: index });
  };

  const startTimer = () => {
    timerProps.start()
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
        addAttempt,
        response,
        setResponse,
        handleResponse,
        startTimer,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
