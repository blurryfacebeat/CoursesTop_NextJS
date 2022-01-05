import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export interface LinksInterface {
  href: string;
  name: string;
}
