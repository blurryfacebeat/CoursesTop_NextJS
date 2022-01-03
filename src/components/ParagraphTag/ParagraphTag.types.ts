import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ParagraphTagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  type?: 'small' | 'medium' | 'big';
  children?: ReactNode;
}
