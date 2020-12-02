import React, { Component } from 'react';
import lessonService from '../../services/lessonService';
import styled from 'styled-components';
import PreQuestionForm from '../../components/PreQuestionForm/PreQuestionForm';
import CreateQuestionForm from '../../components/CreateQuestionForm/CreateQuestionForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

class CreateLesson extends Component {
  state = {
    formData: {
      name: '',
      duration: 0,
      numberOfQuestions: 0,
      topics: '',
      type: 'multiple choice',
      media: '',
      questions: [],
      isDraft: false,
      archived: false,
    },
    timeLimit: false,
    template: 'Multiple Choice',
    question: {
      problemStatement: '',
      suggestion: '',
      answers: [],
    },
    numberOfAnswers: 0,
  };

  handleSubmit = (e) => {
    lessonService.create(this.state.formData);
  };

  handleNumberOfQuestions = (e) => {
    e.preventDefault();
    const numberOfQuestions = e.target.value;
    const formData = this.state.formData;
    formData.numberOfQuestions = parseInt(numberOfQuestions);
    this.setState({ formData: formData });
  };

  handleDuration = (e) => {
    e.preventDefault();
    const duration = e.target.value;
    const formData = this.state.formData;
    formData.duration = parseInt(duration);
    this.setState({ formData: formData });
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
    });
  };

  handleAddQuestion = (e) => {
    console.log('adding question');
    e.preventDefault();
    const question = this.state.question;
    const formData = this.state.formData;
    formData.questions.push(question);
    this.setState({ formData: formData });
  };

  handleChangeQuestionDetails = (e) => {
    const question = {
      ...this.state.question,
      [e.target.name]: e.target.value,
    };
    this.setState({
      question,
    });
  };

  handleChangeAnswerValue = (e) => {
    const index = e.target.name;
    const question = this.state.question;
    question.answers[index].label = e.target.value;
    this.setState({ question: question });
  };

  handleCreateAnswerField = (e) => {
    e.preventDefault();
    let numberOfAnswers = this.state.numberOfAnswers;
    numberOfAnswers++;
    this.setState({ numberOfAnswers: numberOfAnswers });
    let question = this.state.question;
    question.answers.push({ label: '', isCorrect: false });
    this.setState({ question: question });
    console.log(numberOfAnswers);
  };

  handleToggleTimeLimit = () => {
    let timeLimit = this.state.timeLimit;
    timeLimit = !timeLimit;
    this.setState({ timeLimit: timeLimit });
  };

  handleToggleAnswerCorrect = (e) => {
    const index = e.target.name;
    const question = this.state.question;
    question.answers[index].isCorrect = !question.answers[index].isCorrect;
    this.setState({ question: question });
  };

  render() {
    const { timeLimit, template, suggestion, problemStatement } = this.state;
    const {
      name,
      duration,
      numberOfQuestions,
      topics,
      type,
    } = this.state.formData;

    return (
      <Container>
        <h1>Create a Lesson</h1>
        <div>
          <PreQuestionForm
            type={type}
            name={name}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            topics={topics}
            handleToggleTimeLimit={this.handleToggleTimeLimit}
            timeLimit={timeLimit}
            duration={duration}
            numberOfQuestions={numberOfQuestions}
            handleNumberOfQuestions={this.handleNumberOfQuestions}
            handleChangeTopic={this.handleChangeTopic}
            handleDuration={this.handleDuration}
          />
          {template ? (
            Array.from(Array(numberOfQuestions)).map((x, index) => (
              <>
                <h2>Question #{index + 1}</h2>
                <CreateQuestionForm
                  key={index}
                  problemStatement={problemStatement}
                  handleChangeQuestionDetails={this.handleChangeQuestionDetails}
                  suggestion={suggestion}
                  answers={this.state.question.answers}
                  handleChangeAnswerValue={this.handleChangeAnswerValue}
                  handleToggleAnswerCorrect={this.handleToggleAnswerCorrect}
                  handleCreateAnswerField={this.handleCreateAnswerField}
                  handleAddQuestion={this.handleAddQuestion}
                />
              </>
            ))
          ) : (
            <h1>This is not a multiple choice template</h1>
          )}
          <button onClick={this.handleSubmit}>Submit Lesson</button>
        </div>
      </Container>
    );
  }
}

export default CreateLesson;
