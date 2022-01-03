import React from 'react';
import { ButtonSecondaryProps } from './ButtonSecondary.types';
import { Button } from '@/components';
import ArrowIcon from '@/assets/icons/arrow_right.svg';
import styles from './ButtonSecondary.module.scss';
import cn from 'classnames';

const ButtonSecondary = (props: ButtonSecondaryProps) => {
  const { children, buttonStyle, textStyle, isActive, ...otherProps } = props;

  return (
    <Button
      buttonStyle={cn(
        styles.buttonSecondary,
        buttonStyle,
        isActive && styles.buttonSecondaryActive
      )}
      textStyle={cn(styles.buttonSecondaryText, textStyle)}
      {...otherProps}
    >
      <ArrowIcon className={cn(styles.arrow, isActive && styles.activeArrow)} />
      {children}
    </Button>
  );
};

export default ButtonSecondary;
