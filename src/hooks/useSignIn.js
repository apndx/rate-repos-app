import { useMutation } from '@apollo/client';
import mutations from '../graphql/mutations';

import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';


const useSignIn = () => {

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(mutations.SIGN_IN);

  const signIn = async ({ username, password }) => {

    const { data } = await mutate({ variables: { username, password } });
    const accessToken = data.authorize.accessToken;
    await authStorage.setAccessToken(accessToken);
    apolloClient.resetStore();
    return accessToken;
  };

  return [signIn, result];
};

export default useSignIn;

