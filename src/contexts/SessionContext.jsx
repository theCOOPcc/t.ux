import React, { useState, useEffect, createContext, useContext } from "react";
import activityService from "../services/activityService";
import { UserContext } from "./UserContext";
import Check from "../images/icons/answerCheckGreen.svg";
import Xred from "../images/icons/answerXRed.svg";

export const SessionContext = createContext();

const SessionContextProvider = ({ children, activityId, timerProps }) => {
  const [sessionData, setSessionData] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(
    localStorage.getItem("module") || 0
  );
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  // !started and finished are for session tracking.
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  // !completed variable is used for the progress bar.
  const [completed, setCompleted] = useState("-10");
  // !response variable is used to track Question response.
  const [response, setResponse] = useState(null);
  const [totalSections, setTotalSections] = useState(null);
  const [correct, setCorrect] = useState(true);
  const [icon, setIcon] = useState(false);
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
    console.log(sessionData, "LINE 75");
    touchSection();
    touchModule();
    //ADD Varbiable or State and export to answer.jsx
    // setIcon(true);
    completeModule();
    await incrementModuleIndex();
    setResponse(null);
    setCorrect(null);
    console.log("currentModule", currentModule);
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
    const completed = index === 0 ? "0" : `${index}0`;

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
        module.type === "question" && (module.attempts = []);
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
    setTotalSections(initialSessionObject.sections.length - 1);
  };

  // todo: Write these functions to track session.
  const touchSection = () => {
    // console.log(correct, "LINE 145");
    const updateSessionData = { ...sessionData };
    // console.log(correct, "LINE 148");
    if (correct === true) {
      updateSessionData.sections[currentSectionIndex].touched = true;
    } else {
      updateSessionData.sections[currentSectionIndex].touched = false;
    }
    // console.log(correct, "LINE 154");
    setSessionData(updateSessionData);
  };
  // !working
  const completeSection = () => {
    const updateSessionData = { ...sessionData };
    // console.log(correct, 'LINE 158')
    // if (correct ? (updateSessionData.sections[currentSectionIndex].completed = true) : (updateSessionData.sections[currentSectionIndex].completed = false))
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
    if(answer.isCorrect){
      addAttempt({
        selectedAnswer: answer.newLabel,
        isCorrect: answer.isCorrect,
      });
      setResponse({
        selection: answer,
        selectionIndex: index,
        isCorrect: answer.isCorrect,
      });
    } else {
      addAttempt({
        selectedAnswer: answer.newLabel,
        isCorrect: answer.isCorrect,
      });
    }
  };

  const checkResponse = (answer) => {
    if (answer.isCorrect) {
      setIcon(Check)
    } else {
      setIcon(Xred);
    }
  }

  const handleAnswer = (answer) => {
    if (answer.isCorrect) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
    setCorrect(answer.isCorrect);
  };

  const startTimer = () => {
    timerProps.start();
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
        incrementModuleIndex,
        totalSections,
        handleAnswer,
        correct,
        setCorrect,
        icon,
        checkResponse
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
