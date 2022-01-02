import { HTMLProps, ReactNode } from 'react';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  children?: ReactNode;
  buttonStyle?: string;
  textStyle?: string;
}
