import React from 'react';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';

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
      <FormikTextInput name="username" placeholder="Username" testID="usernameField"/>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} testID="passwordField"/>
        <Pressable style={styles.button} onPress={onSubmit} testID="submitButton">
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
    </View>
  );
};

export default SignInForm;
