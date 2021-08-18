import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: theme.button.height,
    width: theme.button.width,
    paddingHorizontal: theme.padding.small,
    backgroundColor: theme.colors.white,
    marginBottom: theme.margins.marginXs,
    borderStyle: theme.border.style,
    borderRadius: theme.border.borderRadius,
    borderWidth: theme.border.borderWidth,
    borderColor: theme.colors.white
  },
  inputError: {
    height: theme.button.height,
    width: theme.button.width,
    paddingHorizontal: theme.padding.small,
    backgroundColor: theme.colors.white,
    marginBottom: theme.margins.marginXs,
    borderRadius: theme.border.borderRadius,
    borderWidth: theme.border.borderWidth,
    borderStyle: theme.border.style,
    borderColor: theme.colors.error,
  },
  error: { 
    color: theme.colors.error,
    marginBottom: theme.margins.marginXs, 
  },
});

const FormikTextInput = ({ name, secureTextEntry, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError ? styles.inputError : styles.input}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {showError && <Text style={styles.error}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;