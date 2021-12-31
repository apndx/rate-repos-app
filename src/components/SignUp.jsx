import React from 'react';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router-native";
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;
    
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
  <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;
