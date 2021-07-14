import React from 'react';
import { Formik, Form } from 'formik';
import EmailForm from './EmailForm';
import GeneralForm from './GeneralForm';
import authAPI from '../../services/authService';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Email Required';
    console.log(error);
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
    console.log(error);
  } else {
    error = '';
  }
  return error;
}

function validatePasswords(password, passwordConf) {
  let error;
  error = password !== passwordConf ? 'Passwords Must Match' : '';
  return error;
}

const SignupForm = ({groupId, email}) => {
  return (
    <Formik
      initialValues={{
        userData: {
          email: email,
          firstName: '',
          lastName: '',
          password: '',
          passwordConf: '',
        },
        continue: false,
      }}
      onSubmit={(values) => {
        console.log(values);
        authAPI.signup(values.userData);
      }}
      validate={(values) => {
        const errors = {};
        if (values.userData.email) {
          const error = validateEmail(values.userData.email);
          error.length > 0 && (errors.email = error);
        }

        // TODO: Need better password validation.
        if (!values.userData.password) {
          const error = 'Password Required';
          errors.password = error;
        }

        if (values.userData.password && values.userData.passwordConf) {
          const error = validatePasswords(
            values.userData.password,
            values.userData.passwordConf
          );
          error.length > 0 && (errors.passwordConf = error);
        }
        return errors;
      }}
    >
      {({ errors, touched, handleChange, values, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
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
              handleSubmit={handleSubmit}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
