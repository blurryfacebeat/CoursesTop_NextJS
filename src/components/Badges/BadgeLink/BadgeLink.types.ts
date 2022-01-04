import { BadgeProps } from '@/components/Badges/Badge';
import { ReactNode } from 'react';

export interface BadgeLinkProps extends BadgeProps {
  link: string;
  children: ReactNode;
}
