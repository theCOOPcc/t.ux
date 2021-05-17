import React from 'react';
import activityService from '../../services/activityService';
import styled from 'styled-components';
import { Formik, FieldArray } from 'formik';
import {
  Input,
  Form,
  InputGroup,
  Label,
  Select,
  TextArea,
  Button,
} from '../../components/TuxComponents/FormComponents';

import {createActivityData} from '../../sampleData'

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 40px;
  height: 100vh;
  width: 100%;
`;

const SideBar = styled.div`
  min-width: 300px;
  background: grey;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  height: 75px;
  align-items: center;
  justify-content: space-between;
`;

// const Footer = styled.div`
//   display: flex;
//   height: 75px;
// `;


const CreateActivity = () => {
  return (
    <MainContainer>
      <Header>
        <h1>Activity Creation Form</h1>
        {/* // TODO: Programatically render the number of items based off state variable. */}
        <span>Number of items: 0</span>
      </Header>
      <Formik
        initialValues={{
          formData: {
            name: '',
            topic: '',
            modules: [],
          },
          moduleType: '',
        }}
        onSubmit={(values) => {
          console.log(createActivityData);
          activityService.create(createActivityData);
        }}
        render={({ values, handleSubmit, handleChange }) => (
          <>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label>Activity Name:</Label>
                  <Input
                    id="formData.name"
                    name="formData.name"
                    type="text"
                    value={values.formData.name}
                    onChange={handleChange}
                  />
                </InputGroup>
                <InputGroup>
                  <Label>Activity Topic:</Label>
                  <Select
                    id="formData.topic"
                    name="formData.topic"
                    onChange={handleChange}
                    value={values.formData.topic}
                  >
                    <option value=""> </option>
                    <option value="Heuristics">Heuristics</option>
                    <option value="Topic 1">Topic 1</option>
                    <option value="Topic 2">Topic 2</option>
                  </Select>
                </InputGroup>
                {/* // TODO: Is this item type a Question. Yes/No */}
                <InputGroup>
                  <Label>Is this item type a Question?</Label>
                  <div>
                    <Input
                      id="moduleType"
                      name="moduleType"
                      type="radio"
                      onChange={handleChange}
                      value="question"
                    />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div>
                    <Input
                      id="moduleType"
                      name="moduleType"
                      type="radio"
                      onChange={handleChange}
                      value="display"
                    />
                    <Label htmlFor="no">No</Label>
                  </div>
                </InputGroup>
                <FieldArray
                  name="formData.modules"
                  render={(arrayHelpers) =>
                    values.moduleType === 'display' ? (
                      <Button
                        type="button"
                        onClick={() =>
                          arrayHelpers.insert(0, { moduleType: 'display' })
                        }
                      >
                        Add Display Item
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={() =>
                          arrayHelpers.insert(0, {
                            moduleType: 'question',
                            answers: [],
                          })
                        }
                      >
                        Add Question Item
                      </Button>
                    )
                  }
                />
                {values.formData.modules.length > 0 &&
                values.formData.modules[0].moduleType === 'display' ? (
                  <FieldArray
                    name="formData.modules"
                    render={(arrayHelpers) => (
                      <>
                        <InputGroup>
                          <Label htmlFor="media">Media:</Label>
                          <Input name="media" type="file" value="" />
                        </InputGroup>
                        <InputGroup>
                          <Label>Copy</Label>
                          <TextArea
                            id={`formData.modules[${0}].copy`}
                            name={`formData.modules[${0}].copy`}
                            type="textarea"
                            onChange={handleChange}
                          ></TextArea>
                        </InputGroup>
                      </>
                    )}
                  />
                ) : values.formData.modules.length > 0 &&
                  values.formData.modules[0].moduleType === 'question' ? (
                  // Add Question module.
                  <>
                    <InputGroup>
                      <Label>Enter Question:</Label>
                      <TextArea
                        id={`formData.modules[0].problemStatement`}
                        name={`formData.modules[0].problemStatement`}
                        type="textarea"
                        // value={formData.modules[0].problemStatement}
                        onChange={handleChange}
                      ></TextArea>
                    </InputGroup>
                    <InputGroup>
                      <Label>Question Type</Label>
                      <Select
                        id={`formData.modules[0].topic`}
                        name={`formData.modules[0].topic`}
                        onChange={handleChange}
                        // value={values.topic}
                      >
                        <option value=" "> </option>
                        <option value="multiple-choice">Multiple Choice</option>
                        <option value="multiple-answer">Multiple Answer</option>
                        <option value="boolean">Boolean</option>
                      </Select>
                    </InputGroup>
                    <InputGroup>
                      <Label>Post Answer Feedback</Label>
                      <TextArea
                        id={`formData.modules[0].suggestion`}
                        name={`formData.modules[0].suggestion`}
                        type="textarea"
                        // value={values.formData.modules[0].suggestion}
                        onChange={handleChange}
                      ></TextArea>
                    </InputGroup>
                    {/* // TODO: Add Button to add Answer. */}
                    <FieldArray
                      name="formData.modules[0].answers"
                      render={(arrayHelpers) => (
                        //Render Answers Input Fields
                        <>
                          {values.formData.modules[0].answers.map(
                            (answer, index) => (
                              <>
                                <InputGroup>
                                  {/* // TODO: Render answer # based off of array index + 1. */}
                                  <Label>Answer #{index + 1}</Label>
                                  <Input
                                    id={`formData.modules[0].answers[${index}].label`}
                                    name={`formData.modules[0].answers[${index}].label`}
                                    type="text"
                                    onChange={handleChange}
                                  />
                                </InputGroup>
                                <InputGroup>
                                  <Label>Correct Answer</Label>
                                  <Input
                                    id={`formData.modules[0].answers[${index}].isCorrect`}
                                    name={`formData.modules[0].answers[${index}].isCorrect`}
                                    type="checkbox"
                                    onChange={handleChange}
                                    // value={true}
                                  />
                                </InputGroup>
                              </>
                            )
                          )}
                          <Button
                            type="button"
                            onClick={() =>
                              arrayHelpers.push({ label: '', isCorrect: false })
                            }
                          >
                            {/* // TODO: Use custom plus icon instead of add answer text */}
                            Add Answer
                          </Button>
                        </>
                      )}
                    />
                    <InputGroup>
                      <Label htmlFor="media">Media:</Label>
                      <Input name="media" type="file" value="" />
                    </InputGroup>
                  </>
                ) : (
                  ''
                )}
                {/* <pre>{JSON.stringify(values)}</pre> */}
                <button type="submit">Create Activity</button>
              </Form>
              <SideBar>
                <span>Items List</span>
                {values.formData.modules.map((module, index) => (
                  <h1>#{index}</h1>
                ))}
              </SideBar>
            </FormContainer>
          </>
        )}
      />
    </MainContainer>
  );
};

export default CreateActivity;
