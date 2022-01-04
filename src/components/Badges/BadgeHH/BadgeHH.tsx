import React from 'react';
import { BadgeHHProps } from './BadgeHH.types';
import { BadgeLink } from '@/components';
import styles from './BadgeHH.module.scss';

const BadgeHH = (props: BadgeHHProps) => {
  const { children, ...otherProps } = props;

  return (
    <BadgeLink
      badgeStyle={styles.badgeHH}
      textStyle={styles.badgeHHText}
      type="medium"
      {...otherProps}
    >
      {children}
    </BadgeLink>
  );
};

export default BadgeHH;
