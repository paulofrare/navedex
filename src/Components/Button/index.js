import React from 'react';
import { Btn } from './styles';

const Button = ({ children, white = false, onclick }) => {
  return (
    <Btn onClick={onclick} white={white}>
      {children}
    </Btn>
  );
};

export default Button;
