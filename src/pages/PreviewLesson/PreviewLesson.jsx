import React, { Component } from 'react';
import lessonService from '../../services/lessonService';

class PreviewLesson extends Component {
  state = {  }
  render() { 
    const {questions} = this.props.location.state.lesson
    return (  
    <>
     <h1>Preview Lesson</h1> 
     <h3>{questions[0].problemStatement}</h3>
     {questions[0].answers.map((answer) =>( 
       <>
       <p>{answer.label}</p>
       <button>choose</button> 
       </>
     ))}
     <h4>this is where the user will be notified if answer is correct and or provided an explination if not correct</h4>
      {console.log(questions)}
      </>
     );
  }
}
 
export default PreviewLesson;

// render the page based off of figma outline it should show questions and options for answers
// it should have pagination to navigate to the different questions the options will dynamically render based on the number of questions
// when the user selects an answer will submit to check if the answer is correct or incorrect they should recieve some sort of supporting tip where applicable (for right now this should just be correct or incorrect)

