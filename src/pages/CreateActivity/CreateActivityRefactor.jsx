import React, { Component } from 'react';
import activityService from '../../services/activityService';
import styled from 'styled-components';
import PreQuestionForm from '../../components/PreQuestionForm/PreQuestionForm';
import CreateQuestionForm from '../../components/CreateQuestionForm/CreateQuestionForm';
import { useFormik } from 'formik';
import {
  Input,
  Form,
  InputGroup,
  Label,
  Select,
  TextArea,
  Button,
} from '../../components/StyledComponents/FormComponents';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CreateActivity = () => {
  const formik = useFormik({
    initialValues: {
      formData: {
        name: '',
        topic: '',
        timeLimit: false,
      },
    },
    onSubmit: (values) => {
      // TODO: Submit values to api call.
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <h1>Create an Activity</h1>
      <Form onSubmit={formik.handleSubmit}>
        <InputGroup>
          <Label>Activity Name:</Label>
          <Input
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Activity Topic:</Label>
          <Select
            name="topic"
            onChange={formik.handleChange}
            value={formik.values.topic}
          >
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
              name="timeLimit"
              onChange={formik.handleChange}
              // checked={timeLimit}
            />
            <Label for="yes">Yes</Label>
          </div>
          <div>
            <Input
              type="radio"
              name="timeLimit"
              onChange={formik.handleChange}
              // checked={!timeLimit}
            />
            <Label for="no">No</Label>
          </div>
        </InputGroup>
        {/* // TODO: Is this item type a Question. Yes/No */}
        <InputGroup>
          <Label>Is this item type a Question?</Label>
          <div>
            <Input
              type="radio"
              // name="timeLimit"
              onChange={formik.handleChange}
              // checked={timeLimit}
            />
            <Label for="yes">Yes</Label>
          </div>
          <div>
            <Input
              type="radio"
              // name="timeLimit"
              onChange={formik.handleChange}
              // checked={!timeLimit}
            />
            <Label for="no">No</Label>
          </div>
        </InputGroup>
        {/* // TODO: If this is a question type, then render an empty question but pushing an empty question into the questions array, push an empty answer into the answers array. */}
        <InputGroup>
          <Label>Enter Question:</Label>
          <TextArea
            // name="problemStatement"
            type="textarea"
            // value={problemStatement}
            onChange={formik.handleChange}
          ></TextArea>
        </InputGroup>
        {/* // TODO: Offer a suggestion/followup if question is correct/incorrect? */}
        <InputGroup>
          <Label>Suggestion:</Label>
          <TextArea
            // name="suggestion"
            type="textarea"
            // value={suggestion}
            onChange={formik.handleChange}
          ></TextArea>
        </InputGroup>
        {/* // TODO: Map through answers array and render inputs. */}
        

        <pre>{JSON.stringify(formik.values)}</pre>
      </Form>
    </Container>
  );
};

export default CreateActivity;
