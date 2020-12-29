import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import EmailForm from './EmailForm';
import GeneralForm from './GeneralForm';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Email Required';
    console.log(error);
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
    console.log(error);
  }
  return error;
}

function validatePasswords(password, passwordConf) {
  // TODO: What are our password validation rules? Consider finding some better convention online. This is a temporary solution.
  let error;

  error = password !== passwordConf ? 'Passwords Must Match' : '';
  return error;
}

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: null,
        firstName: '',
        lastName: '',
        password: '',
        passwordConf: '',
        continue: false,
      }}
      onSubmit={(values) => {
        console.log(values);
        // Submit data
      }}
      validate={(values) => {
        const errors = {};
        if (values.email) {
          const error = validateEmail(values.email);
          errors.email = error;
        }

        // TODO: Write better password validation.
        if (!values.password) {
          const error = 'Password Required';
          errors.password = error;
        }

        if (values.password && values.passwordConf) {
          const error = validatePasswords(values.password, values.passwordConf);
          errors.passwordConf = error;
        }
        return errors;
      }}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          {!values.continue && (
            <EmailForm
              errors={errors}
              touched={touched}
              values={values}
              handleChange={handleChange}
            />
          )}
          {values.continue && (
            <GeneralForm
              errors={errors}
              touched={touched}
              values={values}
              handleChange={handleChange}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
