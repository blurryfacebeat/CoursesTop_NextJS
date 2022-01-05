import React from 'react';
import { LinkTagProps } from './LinkTag.types';
import styles from './LinkTag.module.scss';
import cn from 'classnames';

const LinkTag = (props: LinkTagProps) => {
  const { type = 'medium', children, className, ...otherProps } = props;

  const typeStyle = styles[type];

  return (
    <a
      className={cn(styles.link, typeStyle, className)}
      target="_blank"
      rel="noopener noreferrer"
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default LinkTag;
