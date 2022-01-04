import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface BadgeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  type?: 'small' | 'medium' | 'big';
  badgeStyle?: string;
  textStyle?: string;
  badgeColor?: string;
  textColor?: string;
  backgroundStyle?: string;
}
