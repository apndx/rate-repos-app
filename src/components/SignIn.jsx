import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

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
      justifyContent: 'center'
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
      <FormikTextInput name="password" placeholder="Password" />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
    </View>
  );
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
