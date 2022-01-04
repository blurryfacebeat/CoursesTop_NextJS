import React from 'react';
import { BadgeLinkProps } from './BadgeLink.types';
import { Badge } from '@/components';

const BadgeLink = (props: BadgeLinkProps) => {
  const { link, children, ...otherProps } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Badge {...otherProps}>{children}</Badge>
    </a>
  );
};

export default BadgeLink;
