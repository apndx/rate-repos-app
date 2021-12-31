import { useMutation } from '@apollo/client';
import mutations from '../graphql/mutations';

import { useApolloClient } from '@apollo/client';


const useCreateReview = () => {

  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(mutations.CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    console.log(repositoryName, ownerName, rating, text);
    await mutate({ variables: { repositoryName, ownerName, rating, text } });

    apolloClient.resetStore();
  };

  return [createReview, result];
};

export default useCreateReview;
