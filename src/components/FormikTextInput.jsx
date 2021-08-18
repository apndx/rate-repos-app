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
  },
  error: { textAlign: 'center', height: 17.5 },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.input}
        {...props}
      />
      {showError && <Text style={styles.error}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;