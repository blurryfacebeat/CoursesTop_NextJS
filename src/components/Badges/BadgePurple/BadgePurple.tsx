import React from 'react';
import { Badge } from '@/components';
import { BadgePurpleProps } from './BadgePurple.types';
import styles from './BadgePurple.module.scss';

const BadgePurple = (props: BadgePurpleProps) => {
  const { children, ...otherProps } = props;

  return (
    <Badge
      textStyle={styles.badgePurpleText}
      badgeStyle={styles.badgePurple}
      {...otherProps}
    >
      {children}
    </Badge>
  );
};

export default BadgePurple;
