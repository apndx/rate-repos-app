import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ style, secureTextEntry, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle} secureTextEntry={secureTextEntry} {...props} />;
};

export default TextInput;
