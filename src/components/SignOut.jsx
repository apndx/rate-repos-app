import { useEffect } from 'react';
import useSignOut from '../hooks/useSignOut';
import { useHistory } from "react-router-native";

const SignOut = () => {

  const signOut = useSignOut();
  const history = useHistory();

    useEffect(() => {
      async function signOutEffect() {
        try {
          await signOut();
          history.push("/");
        } catch (e) {
          console.log(e);
        }
      }
    signOutEffect();
    }, []);

    return (null);

};

export default SignOut;
