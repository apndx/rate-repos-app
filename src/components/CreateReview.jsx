import React from 'react';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from "react-router-native";
import CreateReviewContainer from './CreateReviewContainer';

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { repositoryName, ownerName, stringRating, text } = values;
    
    try {

      const rating = parseInt(stringRating);

      await createReview({ repositoryName, ownerName, rating, text});
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
  <CreateReviewContainer onSubmit={onSubmit} />
  );
};

export default CreateReview;
