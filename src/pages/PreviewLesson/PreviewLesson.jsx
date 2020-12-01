import React, { Component } from 'react';
import lessonService from '../../services/lessonService';
import styled from 'styled-components';


const Container = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  justify-items: center;
  padding: 10px;
`;
const QuestionImg = styled.div`
  `;

const Button = styled.div`
  max-width: 50px;
`
const Title = styled.div`
  text-align: center;
  `

const Span = styled.div`
display: flex;
padding-right: 100px;
justify-content: flex-end;
`

const NextButton = styled.button`
height: 40px;
width: 80px;
`

class PreviewLesson extends Component {
  state = { 
    currentQuestion: 0,
    text: ["blah","this answer is correct","this answer is incorrect"],
  }

  handleIncrement = (e) => {
    this.setState(state => ({
    currentQuestion: +1
    }))
  }

  handleSubmitAnswer = (e) => {
    //take idx of the div in which the button that was clicked and if answer is in correct do x   if answer is correct do y 
    // to check if correct idx of div at answer.iscorrect should be true 
    const idx = e.target.value
    // props.lesson.questions.answers[idx].isCorrect === true this.state.text[idx]
    // if (this.props.lesson.questions.answers[idx].isCorrect === true) {
    //   this.answerIdx += 1
    // } else if (this.props.lesson.questions.answers[idx].isCorrect === false) {
    //   this.answerIdx += 2
    // }
  }

  render() { 
    const {questions} = this.props.location.state.lesson
    let answerIdx = 0
    return (  
    <><Container>
     <Title><h1>Preview Lesson</h1> </Title>
     <span></span></Container>
     {this.state.currentQuestion < questions.length ? 
     <>
     <Container>
     <QuestionImg><img src={"https://picsum.photos/500/300"}></img></QuestionImg>
     <p>{questions[this.state.currentQuestion].answers.map((answer, idx) =>( 
       
       <Button key={idx}>
       <button onClick={this.handleSubmitAnswer} value={idx}>{answer.label}</button>
       </Button>
       
     ))}</p>
     
     <h3>{questions[0].problemStatement}</h3><span></span>
     <h4>{this.state.text[answerIdx]}</h4>
      {console.log(questions)}

      </Container>
      <Span>
        <NextButton onClick={this.handleIncrement}>Next</NextButton>
        </Span>
        </>
        : <p>no more questions</p>
        }
      </>
     );
  }
}
 
export default PreviewLesson;

// render the page based off of figma outline it should show questions and options for answers
// it should have pagination to navigate to the different questions the options will dynamically render based on the number of questions
// when the user selects an answer will submit to check if the answer is correct or incorrect they should recieve some sort of supporting tip where applicable (for right now this should just be correct or incorrect)

