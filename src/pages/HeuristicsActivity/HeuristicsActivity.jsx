import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import activityService from '../../services/activityService';

const getActivityData = () => {
  return activityService.getOne('5fedff0ed2cde92a7579795c');
};

const HeuristicsActivity = () => {
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    getActivityData().then((data) => setActivityData(data));
  }, []);


  return activityData ? <Activity details={activityData} /> : <h1>Loading</h1>;
};

<<<<<<< HEAD
  convertIndexToPercent = (newIndex) => {
    const index =  newIndex -1;
    const completed = (index === 0) ? 0 : `${index}0`;
    this.setState({ completed });
  }


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
    const { currentSectionIndex, sampleData, currentQuestionIndex } = this.state;
    const sections = sampleData.sections
    // const currentSection = sections[currentSectionIndex];
    const {completed} = this.state;

    return (
      <U.Main>
        <U.InfoBar>
          <U.Heading1 bolder>Heuristics</U.Heading1>
          <U.Heading3 greyed>&nbsp;-&nbsp;{sections.name}</U.Heading3>
          <U.Heading3 floatRight>Progress&nbsp;&nbsp;</U.Heading3>
          {/* TODO: Fix bug that once progress bar has gone up in value, when returning to prev section, bar shows different number than color */}
          <ProgressBar 
            completed={completed}
          />
        </U.InfoBar>
        <U.Sub6ColGrid>
        {/* <U.ColorBlock SubGridBlue></U.ColorBlock> */}
           
           {/* // Are there any questions in the currentSection.questions, and is currentQuestionIndex set to anything? */}
          
          <div className="injectParent"><InjectHTML markup={sections[2].modules[0].contents}/></div>

        </U.Sub6ColGrid>
        <SideBarNav
          sections={sections}
          currentSectionIndex={currentSectionIndex}
          currentQuestionIndex={currentQuestionIndex}
          handleCurrentSection={this.handleCurrentSection}
          handleCurrentQuestion={this.handleCurrentQuestion}
          handleJumpToSection={this.handleJumpToSection}
        />
      </U.Main>
    );
  }
}
=======
>>>>>>> a65d639ffeba7487eb09f95b12f7c34a810297c4

export default HeuristicsActivity;
 