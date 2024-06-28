import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  ...otherProps
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
});

export default Input;
