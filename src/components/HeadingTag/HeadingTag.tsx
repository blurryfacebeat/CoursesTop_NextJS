import React from 'react';
import { HeadingTagProps } from './HeadingTag.types';
import styles from './HeadingTag.module.scss';

const HeadingTag = (props: HeadingTagProps) => {
  const { Tag = 'h2', children } = props;

  const style = styles[Tag];

  return <Tag className={style}>{children}</Tag>;
};

export default HeadingTag;
