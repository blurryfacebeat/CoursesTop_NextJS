import React from 'react';
import { SidebarProps } from './Sidebar.types';
import cn from 'classnames';
import { Menu } from '@/layouts/MainLayout/Menu';

const Sidebar = (props: SidebarProps) => {
  const { className, ...otherProps } = props;

  return (
    <div className={cn(className)} {...otherProps}>
      <Menu />
    </div>
  );
};

export default Sidebar;
