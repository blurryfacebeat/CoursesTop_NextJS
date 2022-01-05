import React from 'react';
import { SidebarProps } from './Sidebar.types';
import cn from 'classnames';

const Sidebar = (props: SidebarProps) => {
  const { className, ...otherProps } = props;

  return (
    <div className={cn(className)} {...otherProps}>
      Sidebar
    </div>
  );
};

export default Sidebar;
