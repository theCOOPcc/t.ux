import React, { Component } from 'react';
import {
  Input,
  Form,
  InputGroup,
  Label,
  TextArea,
  Button,
} from '../../components/TuxComponents/FormComponents';

class CreateQuestionForm extends Component {
  state = {};
  render() {
    const {
      problemStatement,
      handleChangeQuestionDetails,
      suggestion,
      answers,
      handleChangeAnswerValue,
      handleToggleAnswerCorrect,
      handleCreateAnswerField,
      handleAddQuestion,
    } = this.props;
    return (
      <Form>
        <InputGroup>
          <Label>Question:</Label>
          <TextArea
            name="problemStatement"
            type="textarea"
            value={problemStatement}
            onChange={handleChangeQuestionDetails}
          ></TextArea>
        </InputGroup>
        <InputGroup>
          <Label>Suggestion:</Label>
          <TextArea
            name="suggestion"
            type="textarea"
            value={suggestion}
            onChange={handleChangeQuestionDetails}
          ></TextArea>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="media">Upload Media:</Label>
          <Input name="media" type="file" value="" />
        </InputGroup>
        {answers.map((answer, index) => (
          <InputGroup key={index}>
            <Label>Answer {index + 1}:</Label>
            <Input
              name={index}
              type="text"
              value={answer.Label}
              index={index}
              onChange={handleChangeAnswerValue}
            />
            <Input
              name={index}
              type="checkbox"
              onChange={handleToggleAnswerCorrect}
            />
          </InputGroup>
        ))}

        <Button onClick={handleCreateAnswerField}>Create Answer</Button>

        <Button onClick={handleAddQuestion}>Add Question</Button>
      </Form>
    );
  }
}

export default CreateQuestionForm;
