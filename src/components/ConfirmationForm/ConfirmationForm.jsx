import React, { useContext } from 'react';
import {SessionContext}  from '../../contexts/SessionContext';
import { Formik, Field, Form } from 'formik';
import * as U from '../../components/TuxComponents/UniversalComponents';
import * as F from '../../components/TuxComponents/FormComponents';
import styled, { css } from 'styled-components';
import './ConfirmationForm.css';

// not sure if this line should be styled div or something else.
const Line = styled.p`
  border: 2px dashed rgba(51, 51, 51, 0.75);
  margin: 20px;
`;

const Div = styled.div`
  padding: 20px;
  align-items: center;
  width: 100%
  margin: 20px;
`;

export const Heading1 = styled.h1`
  font: bold 48px 'Poppins', sans-serif;
  line-height: 24px;
  color: #366062;
`;

export const Heading3 = styled.h3`
  font: 24px 'Poppins', sans-serif;
  line-height: 24px;

  ${(props) =>
    props.activityTitle &&
    css`
      font-weight: 700;
      color: rgba(243, 119, 6, 1);
    `}

  ${(props) =>
    props.formTitle &&
    css`
      font-weight: 700;
      line-height: 36px;
    `}
`;
//  orange Hheading3or: rgba(243,119,6,1.0);
const ConfirmationForm = () => {
  const { sections, name } = useContext(SessionContext);
  // initialize the section names for initalValues
  let data = [];
  sections.forEach((ele, idx, arr) => {
    data.push({
      sectionName: ele.name,
      confidence: false,
    });
  });
  return (
    <>
      <Div>
        <U.ColorBlock SubGridBlue> </U.ColorBlock>
        <Heading1>Congratulations!</Heading1>
        <Heading3>You've successfully completed your</Heading3>
        <Heading3 activityTitle>{name} Activity.</Heading3>
        <Line></Line>
        <Heading3 formTitle>Feedback for your instructor</Heading3>
        <U.Normal lineTwentySeven>
          Check the boxes blow next to concepts you feel confident <br /> about
          after completing this activity:
        </U.Normal>
        <Formik
          initialValues={{ concepts: data, comment: '' }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            console.log('submit: ', data);
            setSubmitting(false);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit} className="centerCheckboxes">
              {values.concepts.map((concept, idx) => (
                <div className="centerCheckboxes alignInput">
                  <label key={idx}>
                    <Field
                      name={`concepts[${idx}].confidence`}
                      type="checkbox"
                      checked={concept.confidence}
                      onChange={handleChange}
                    />
                    {concept.sectionName}
                  </label>
                </div>
              ))}
              <U.Normal sixteen semiBold darkGrey margin margin50>
                {' '}
                Additional Questions or Comments for your instructor?
              </U.Normal>
              <U.TextArea
                name="comment"
                type="textarea"
                value={values.comment}
                onChange={handleChange}
              />
              {/* Below is the JSON code to show what data Formik is getting. */}
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </Form>
          )}
        </Formik>
      </Div>
    </>
  );
};

export default ConfirmationForm;

// checkout this custom checkbox https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
