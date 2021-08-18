import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const TextInput = ({ style, secureTextEntry, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle} secureTextEntry={secureTextEntry} {...props} />;
};

export default TextInput;