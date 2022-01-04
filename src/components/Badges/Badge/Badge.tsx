import React from 'react';
import { BadgeProps } from './Badge.types';
import styles from './Badge.module.scss';
import cn from 'classnames';

const Badge = (props: BadgeProps) => {
  const {
    children,
    type = 'small',
    badgeStyle,
    textStyle,
    badgeColor,
    textColor,
    ...otherProps
  } = props;

  const typeStyle = styles[type];

  return (
    <div
      className={cn(styles.badge, badgeStyle)}
      style={{ backgroundColor: badgeColor }}
      {...otherProps}
    >
      <span
        className={cn(styles.badgeText, typeStyle, textStyle)}
        style={{ color: textColor }}
      >
        {children}
      </span>
    </div>
  );
};

export default Badge;
