import { ReactNode } from 'react';

export interface HeadingTagProps {
  Tag?: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}
