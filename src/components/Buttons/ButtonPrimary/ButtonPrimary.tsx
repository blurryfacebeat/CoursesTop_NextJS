import React from 'react';
import { ButtonPrimaryProps } from './ButtonPrimary.types';
import { Button } from '@/components';
import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = (props: ButtonPrimaryProps) => {
  const { children, ...otherProps } = props;

  return (
    <Button
      buttonStyle={styles.buttonPrimary}
      textStyle={styles.buttonPrimaryText}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
