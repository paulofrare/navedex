import React from 'react';
import { Label, Input, InputContainer } from './styles';

const InputForm = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      ></Input>
    </InputContainer>
  );
};

export default InputForm;
