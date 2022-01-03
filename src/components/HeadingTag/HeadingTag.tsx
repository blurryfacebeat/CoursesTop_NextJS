import React from 'react';
import { HeadingTagProps } from './HeadingTag.types';
import styles from './HeadingTag.module.scss';

const HeadingTag = (props: HeadingTagProps) => {
  const { Tag = 'h2', children, ...otherProps } = props;

  const style = styles[Tag];

  return (
    <Tag className={style} {...otherProps}>
      {children}
    </Tag>
  );
};

export default HeadingTag;
