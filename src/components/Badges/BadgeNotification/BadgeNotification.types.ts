import { BadgeProps } from '@/components/Badges/Badge';
import { ReactNode } from 'react';

export interface BadgeNotificationProps extends BadgeProps {
  children: ReactNode;
}
