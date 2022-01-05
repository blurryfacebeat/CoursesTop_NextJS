import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export interface LinkTagProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  type?: 'small' | 'medium' | 'big';
}
