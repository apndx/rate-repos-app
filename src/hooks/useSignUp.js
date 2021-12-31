import { useMutation } from '@apollo/client';
import mutations from '../graphql/mutations';

const useSignUp = () => {

  const [mutateUp, result] = useMutation(mutations.SIGN_UP);

  const signUp = async ({ username, password }) => {

    const { loading, error } = await mutateUp({ variables: { username, password } });

    if (loading) return null;
    if (error) return `Error! ${error}`;

  };

  return [signUp, result];
};

export default useSignUp;
