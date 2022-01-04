import React from 'react';
import { BadgeNotificationProps } from './BadgeNotification.types';
import { Badge } from '@/components';
import styles from './BadgeNotification.module.scss';

const BadgeNotification = (props: BadgeNotificationProps) => {
  const { children, ...otherProps } = props;

  return (
    <Badge
      type="medium"
      badgeStyle={styles.badgeNotification}
      textStyle={styles.badgeNotificationText}
      {...otherProps}
    >
      {children}
    </Badge>
  );
};

export default BadgeNotification;
