import React from 'react';
import { ButtonSecondaryProps } from './ButtonSecondary.types';
import { Button } from '@/components';
import ArrowRight from '@/assets/icons/arrow_right.svg';
import styles from './ButtonSecondary.module.scss';

const ButtonSecondary = (props: ButtonSecondaryProps) => {
  const { children, ...otherProps } = props;

  return (
    <Button textStyle={styles.buttonSecondaryText} {...otherProps}>
      <ArrowRight />
      {children}
    </Button>
  );
};

export default ButtonSecondary;
