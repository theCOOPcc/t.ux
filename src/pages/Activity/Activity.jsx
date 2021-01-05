import React, { useState, useEffect } from 'react';
import SideBarNav from '../../pages/HeuristicsActivity/SideBarNav';
import * as U from '../../components/TuxComponents/UniversalComponents';
import ActivityHeader from '../../components/ActivityHeader/ActivityHeader';
import ActivityBody from '../../components/ActivityBody/ActivityBody';
// import Timer from 'react-compound-timer';

const Activity = ({ details }) => {
  // State Hooks
  const { sections, topic, _id, name } = details;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [completed, setCompleted] = useState('-10');

  // Variables
  const currentSection = sections[currentSectionIndex];
  const currentModule = currentSection.modules[currentModuleIndex];
  // const [sessionData, setSessionData] = useState({
  //   userName: 'Dan Boterashvili',
  //   activityId: _id,
  //   activityName: name,
  //   activityTopic: topic,
  //   sections: [
  //     {
  //       sectionName: currentSection.name,
  //       sectionModules: [{ moduleType: currentModule.type }],
  //     },
  //   ],
  // });

  // Helper Functions
  const handleJumpToSection = (index) => {
    setCurrentSectionIndex(index);
    setCurrentModuleIndex(0);
    convertIndexToPercent(index);
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
    <U.Main>
      <ActivityHeader
        topic={topic}
        name={currentSection.name}
        completed={completed}
      />

      <ActivityBody
        currentModule={currentModule}
        handleAnswers={handleAnswers} 
      />
      <SideBarNav
        sections={sections}
        currentSection={currentSection}
        currentSectionIndex={currentSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
        currentModule={currentModule}
        currentModuleIndex={currentModuleIndex}
        handleJumpToSection={handleJumpToSection}
        handleCurrentSection={handleCurrentSection}
        handleCurrentModule={handleCurrentModule}
      />
    </U.Main>
  );
};

export default Activity;
