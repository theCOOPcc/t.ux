import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const FollowUp = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  background-color: lightgrey;
  text-align: center;
  height: 100px;
  margin: 10px 0px;
`;

const AnswerButton = styled.button`
  width: 200px;
  height: 40px;
  margin: 10px 0px;
  background-color: ${(props) =>
    props.correct ? 'green' : props.correct === null ? 'lightgrey' : 'red'};
  border: 2px solid black;
  border-radius: 5px;
  color: black;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  margin: 10px 0px;
  background-color: grey;
  border: 2px solid black;
  border-radius: 5px;
  color: black;
`;

class PreviewActivity extends Component {
  state = {
    activity: this.props.location.state.activity,
    currentQuestionIndex: 0,
    // Todo: was an answer selected?
    // Todo: which answer was selected?
    selectedAnswer: null,
  };

  handleSelectAnswer = (e) => {
    console.log('answer index', e.target.name);
    console.log('answer isCorrect?', e.target.value);
    const selectedIndex = parseInt(e.target.name);
    this.setState({ selectedAnswer: selectedIndex });
  };

  handleIncrementCurrentQuestion = () => {
    console.log('incrementing')
    let currentQuestionIndex = this.state.currentQuestionIndex;
    currentQuestionIndex++;
    this.setState({ currentQuestionIndex: currentQuestionIndex });
  };

  render() {
    const { currentQuestionIndex, activity, selectedAnswer } = this.state;
    const { questions } = this.state.activity;
    const question = questions[currentQuestionIndex];

    return (
      <Container>
        <ContentContainer>
          <span>
            {currentQuestionIndex + 1} Of {questions.length}{' '}
          </span>
          <h1>{activity.name}</h1>
          <h2>{question.problemStatement}</h2>
          <img src="https://picsum.photos/300/200" alt="" />
          <FollowUp>Follow up text.</FollowUp>
        </ContentContainer>
        <AnswerContainer>
          {question.answers.map((answer, index) => (
            <AnswerButton
              key={index}
              onClick={this.handleSelectAnswer}
              name={index}
              value={answer.isCorrect}
              correct={selectedAnswer ? answer.isCorrect : null}
            >
              {answer.label}
            </AnswerButton>
          ))}
        </AnswerContainer>
        <Button
          onClick={this.handleIncrementCurrentQuestion}
          disabled={selectedAnswer ? false : true}
        >
          Next
        </Button>
      </Container>
    );
  }
}

export default PreviewActivity;
