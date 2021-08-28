import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import { useHistory } from "react-router-native";

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: 15,
      marginTop: 40
    },
    button: {
      height: theme.button.height,
      width: theme.button.width,
      paddingHorizontal: theme.button.paddingHorizontal,
      backgroundColor: theme.colors.primary,
      marginBottom: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
    },
    error: {
      marginBottom: 20,
      height: 17.5,
    },
    buttonText: {
      color: theme.colors.white,
      fontWeight: theme.fontWeights.bold
    }
  });

  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;
    
    try {
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });
  
  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}>

      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
