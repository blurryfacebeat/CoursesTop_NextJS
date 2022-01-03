import React from 'react';
import { ButtonSecondaryProps } from './ButtonSecondary.types';
import { Button } from '@/components';
import ArrowRight from '@/assets/icons/arrow_right.svg';
import styles from './ButtonSecondary.module.scss';
import cn from 'classnames';

const ButtonSecondary = (props: ButtonSecondaryProps) => {
  const { children, buttonStyle, textStyle, ...otherProps } = props;

  return (
    <Button
      buttonStyle={buttonStyle}
      textStyle={cn(styles.buttonSecondaryText, textStyle)}
      {...otherProps}
    >
      <ArrowRight />
      {children}
    </Button>
  );
};

export default ButtonSecondary;
