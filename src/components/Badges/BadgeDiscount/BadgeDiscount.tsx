import React from 'react';
import { Badge } from '@/components';
import { BadgeDiscountProps } from './BadgeDiscount.types';
import styles from './BadgeDiscount.module.scss';

const BadgeDiscount = (props: BadgeDiscountProps) => {
  const { children, ...otherProps } = props;

  return (
    <Badge
      type="big"
      badgeStyle={styles.badgeDiscount}
      textStyle={styles.badgeDiscountText}
      {...otherProps}
    >
      {children}
    </Badge>
  );
};

export default BadgeDiscount;
