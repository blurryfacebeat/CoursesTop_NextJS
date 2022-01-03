import React from 'react';
import { ButtonPrimaryProps } from './ButtonPrimary.types';
import { Button } from '@/components';
import styles from './ButtonPrimary.module.scss';
import cn from 'classnames';

const ButtonPrimary = (props: ButtonPrimaryProps) => {
  const { children, buttonStyle, textStyle, ...otherProps } = props;

  return (
    <Button
      buttonStyle={cn(styles.buttonPrimary, buttonStyle)}
      textStyle={cn(styles.buttonPrimaryText, textStyle)}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
