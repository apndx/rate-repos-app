import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import CreateReviewForm  from './CreateReviewForm';

const CreateReviewContainer =  ({ onSubmit })  => {
  
  const initialValues = {
    repositoryName: '', 
    ownerName: '', 
    stringRating: '', 
    text: ''
  };

  const validationSchema = yup.object().shape({
    repositoryName: yup
      .string()
      .required('Repository name is required'),
    ownerName: yup
      .string()
      .required('Owner name is required'),
  });

  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}>

      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReviewContainer;
