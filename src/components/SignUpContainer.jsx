import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import SignUpForm from './SignUpForm';

const SignUpContainer =  ({ onSubmit })  => {
  
  const initialValues = {
    username: '',
    password: '',
    confirmation: ''
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1, 'Username min lenght is 1')
      .max(30, 'Username max lenght is 30')
      .required('Username is required'),
    password: yup
      .string()
      .min(5, 'Password minimum lenght is 5')
      .max(50, 'Password maximum lenght is 50')
      .required('Password is required'),
    confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required('Password confirmation is required'),
  });

  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}>

      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;
