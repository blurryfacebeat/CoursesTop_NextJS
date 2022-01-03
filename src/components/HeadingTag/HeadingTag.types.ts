import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HeadingTagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  Tag?: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}
