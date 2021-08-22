import { useMutation } from '@apollo/client';
import mutations from '../graphql/mutations';

const useSignIn = () => {
    const [mutate, result] = useMutation(mutations.SIGN_IN);
  
    const signIn = async ({ username, password }) => {

        return mutate({
            variables: {username, password}
        });

    };
  
    return [signIn, result];
  };

  export default useSignIn;