import React from 'react';
import { HeaderProps } from './Header.types';
import cn from 'classnames';

const Header = (props: HeaderProps) => {
  const { className } = props;

  return <header className={cn(className)}>Header</header>;
};

export default Header;
