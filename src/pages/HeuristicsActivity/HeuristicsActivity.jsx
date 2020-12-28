import React, { Component } from 'react';
import HeuristicsIntro from './Sections/HeuristicsIntro';
import VisibilityOfSystemStatus from './Sections/VisibilityOfSystemStatus';
import SystemWorldMatch from './Sections/SystemWorldMatch';
import UserControlFreedom from './Sections/UserControlFreedom';
import ConsistencyStandards from './Sections/ConsistencyStandards';
import ErrorPrevention from './Sections/ErrorPrevention';
import RecognitionOverRecall from './Sections/RecognitionOverRecall';
import FlexibilityEfficiency from './Sections/FlexibilityEfficiency';
import AestheticMinimalism from './Sections/AestheticMinimalism';
import ErrorRecovery from './Sections/ErrorRecovery';
import HelpDocumentation from './Sections/HelpDocumentation';
import SideBarNav from './SideBarNav';
import Test1 from './Test2';
import Test2 from './Test2';
import Test3 from './Test3';
import * as U from '../../components/TuxComponents/UniversalComponents';
import ProgressBar from '../../components/ProgressBar/ProgressBar'

// TODO:This will be a major route to /activity/heuristics. Which will live in the App.js router.
//[x]This page will display the introduction information.
// [x] TODO:This page will have a sidebar with 10 subpage items, which will require routes in app.js for now.
// Down the line can we localize all of the routes specific to this activity in its own Router? Is that necessary?
// TODO:Each section will have questions and answers of their own, we will have to hold the correct value for each answer somewhere in state or local to the button?
// TODO: Track user inputs using React Tracking Library.
//TODO: display a timer for each question
//TODO: track the time spent on each question
//TODO: Submit all relevant data (recordedActivity data) on the final page.

class HeuristicsActivity extends Component {
  state = {
    // which answer buttons are clicked in order to enable and disable answer buttons
    // some state variable to track whether or not next is active or disabled, next is only active after a user answers a question.
    // will have some state to record the activity.
    // Blurb pops up for correct and incorrect answers
    sections: [
      {
        name: 'Introduction',
        // route: 'introduction',
        component: <HeuristicsIntro />,
        questions: [],
      },
      {
        name: 'Visibility of System Status',
        // route: 'system-status',
        component: <VisibilityOfSystemStatus />,
        questions: [<Test2 />, <Test3 />],
      },
      {
        name: 'System / World Match',
        // route: 'system-world-match',
        component: <SystemWorldMatch />,
        questions: [<Test1 />],
      },
      {
        name: 'User Control',
        // route: 'user-control',
        component: <UserControlFreedom />,
        questions: [],
      },
      {
        name: 'Consistency + Standards',
        // route: 'consistency-standards',
        component: <ConsistencyStandards />,
        questions: [<Test2 />, <Test3 />],
      },
      {
        name: 'Error Prevention',
        // route: 'error-prevention',
        component: <ErrorPrevention />,
        questions: [],
      },
      {
        name: 'Recognition over Recall',
        // route: 'recognition-over-recall',
        component: <RecognitionOverRecall />,
        questions: [],
      },
      {
        name: 'Flexibility + Efficiency',
        // route: 'flexibility-efficiency',
        component: <FlexibilityEfficiency />,
        questions: [],
      },
      {
        name: 'Aesthetic + Minimilism',
        // route: 'aesthetic-minimilism',
        component: <AestheticMinimalism />,
        questions: [],
      },
      {
        name: 'Error Recovery',
        // route: 'error-recovery',
        component: <ErrorRecovery />,
        questions: [],
      },
      {
        name: 'Help + Documentation',
        // route: 'help-documentation',
        component: <HelpDocumentation />,
        questions: [],
      },
    ],
    currentSectionIndex: 0,
    currentQuestionIndex: null,
    completed: '-10',
  };

  handleCurrentSection = () => {
    console.log('incrementing current section');
    let currentSectionIndex = this.state.currentSectionIndex;
    let currentQuestionIndex = this.state.currentQuestionIndex;
    currentSectionIndex++;
    currentQuestionIndex = 0;
    this.setState({ currentSectionIndex, currentQuestionIndex });
  };

  handleJumpToSection = (newIndex) => {
    // Adjusted for progress bar
    const currentSectionIndex = newIndex;
    const index =  newIndex -1;
    const completed = (index === 0) ? 0 : `${index}0`;
    this.setState({ currentSectionIndex, completed });
  };

  handleCurrentQuestion = (currentSection) => {
    console.log('onto the next question');
    // TODO: If there are no more questions in the array then reset currentQuestionIndex to 0.
    let currentQuestionIndex = this.state.currentQuestionIndex;
    currentQuestionIndex < currentSection.questions.length
      ? currentQuestionIndex++
      : (currentQuestionIndex = null);
    this.setState({ currentQuestionIndex });
  };

  render() {
    const { currentSectionIndex, sections, currentQuestionIndex } = this.state;
    const currentSection = sections[currentSectionIndex];
    const {completed} = this.state;
    return (
      <>
        <U.InfoBar>
          <U.Heading1 bolder>Heuristics</U.Heading1>
          <U.Heading3 greyed>&nbsp;-&nbsp;{currentSection.name}</U.Heading3>
          <U.Heading3 floatRight>Progress&nbsp;&nbsp;</U.Heading3>
          <ProgressBar 
            completed={completed}
          />
        </U.InfoBar>
        <U.Sub6ColGrid>
          <U.ColorBlock SubGridBlue></U.ColorBlock>
          {/* // Are there any questions in the currentSection.questions, and is currentQuestionIndex set to anything? */}
          {currentSection.questions.length > 0 && currentQuestionIndex >= 0
            ? // Render the current Question
              currentSection.questions[currentQuestionIndex]
            : // Otherwise render the section component
              currentSection.component}
        </U.Sub6ColGrid>
        <SideBarNav
          sections={sections}
          currentSectionIndex={currentSectionIndex}
          currentQuestionIndex={currentQuestionIndex}
          handleCurrentSection={this.handleCurrentSection}
          handleCurrentQuestion={this.handleCurrentQuestion}
          handleJumpToSection={this.handleJumpToSection}
        />
      </>
    );
  }
}

export default HeuristicsActivity;
