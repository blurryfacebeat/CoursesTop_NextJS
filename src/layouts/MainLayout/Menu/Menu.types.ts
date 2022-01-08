import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TopLevelCategory } from '@/services/TopPages';

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface IFirstLevelMenuItem {
  route: string;
  name: string;
  Icon: JSX.Element;
  id: TopLevelCategory;
}
