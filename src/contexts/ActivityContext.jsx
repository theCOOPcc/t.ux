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

  // Set Activity from Database
  const getActivityData = () => {
    return activityService.getOne(activityId);
  };

  useEffect(() => {
    getActivityData().then((data) => setActivityData(data));
  }, []);

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

  return (
    <ActivityContext.Provider
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
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
