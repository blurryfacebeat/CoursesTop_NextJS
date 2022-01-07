import React, { useContext } from 'react';
import { MenuProps } from './Menu.types';
import styles from './Menu.module.scss';
import { AppContext } from '@/context/app.context';

const Menu = (props: MenuProps) => {
  const { ...otherProps } = props;

  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div {...otherProps}>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
