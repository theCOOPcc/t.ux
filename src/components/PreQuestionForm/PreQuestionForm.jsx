import React, { Component } from 'react';
import {Input, Form, InputGroup, Label, Select} from '../../components/StyledComponents/FormComponents'


class PreQuestionForm extends Component {
  state = {};
  render() {
    const {
      name,
      topics,
      handleToggleTimeLimit,
      timeLimit,
      duration,
      numberOfQuestions,
      handleNumberOfQuestions,
      handleChange,
      handleDuration,
      type,
    } = this.props;
    return (
      <Form>
        <InputGroup> 
          <Label>Activity Name:</Label>
          <Input name="name" type="text" value={name} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <Label>Activity Topic:</Label>
          <Select name="topics" onChange={handleChange} value={topics}>
            <option value="Heuristics">Heuristics</option>
            <option value="Topic 1">Topic 1</option>
            <option value="Topic 2">Topic 2</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>Time Limit</Label>
          <div>
            <Input
              type="radio"
              name="yes"
              onChange={handleToggleTimeLimit}
              checked={timeLimit}
            />
            <Label for="yes">Yes</Label>
          </div>
          <div>
            <Input
              type="radio"
              name="no"
              onChange={handleToggleTimeLimit}
              checked={!timeLimit}
            />
            <Label for="no">No</Label>
          </div>
        </InputGroup>
        {timeLimit ? (
          <InputGroup>
            <Label>Set Time Limit:</Label>
            <Input
              name="duration"
              type="number"
              min="0"
              value={duration}
              onChange={handleDuration}
              required
            />
          </InputGroup>
        ) : (
          ''
        )}
        <InputGroup>
          <Label>Number of Items:</Label>
          <Input
            name="numberOfQuestions"
            type="number"
            min="0"
            value={numberOfQuestions}
            onChange={handleNumberOfQuestions}
          />
        </InputGroup>
        <InputGroup>
          <Label>Template:</Label>
          <Select name="type" value={type} onChange={handleChange}>
            <option value="multiple-choice">Multiple Choice</option>
            <option value="drag-and-drop">Drag and Drop</option>
          </Select>
        </InputGroup>
      </Form>
    );
  }
}

export default PreQuestionForm;
