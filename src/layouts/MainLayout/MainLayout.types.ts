import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MainLayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
