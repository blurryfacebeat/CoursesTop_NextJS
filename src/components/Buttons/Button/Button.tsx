import React from 'react';
import cn from 'classnames';

import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button = (props: ButtonProps) => {
  const { text, children, buttonStyle, textStyle } = props;

  return (
    <button className={cn(styles.button, buttonStyle)}>
      <span className={cn(styles.buttonText, textStyle)}>{text}</span>
      {children}
    </button>
  );
};

export default Button;
