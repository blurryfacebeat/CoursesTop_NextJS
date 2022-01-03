import React from 'react';
import cn from 'classnames';

import { ParagraphTagProps } from './ParagraphTag.types';
import styles from './ParagraphTag.module.scss';

const ParagraphTag = (props: ParagraphTagProps) => {
  const { type = 'medium', children, className, ...otherProps } = props;

  const typeStyle = styles[type];

  return (
    <p className={cn(styles.paragraph, typeStyle, className)} {...otherProps}>
      {children}
    </p>
  );
};

export default ParagraphTag;
