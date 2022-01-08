import React, { useContext } from 'react';
import cn from 'classnames';
import { IFirstLevelMenuItem, MenuProps } from './Menu.types';
import { AppContext } from '@/context/app.context';
import styles from './Menu.module.scss';
import CoursesIcon from '@/assets/icons/graduation_hat.svg';
import ServicesIcon from '@/assets/icons/cloud.svg';
import BooksIcon from '@/assets/icons/book.svg';
import ProductsIcon from '@/assets/icons/box.svg';
import { TopLevelCategory } from '@/services/TopPages';
import { LinkTag } from '@/components';
import { PageItem } from '@/services/TopPages';

const firstLevelMenu: Array<IFirstLevelMenuItem> = [
  {
    route: '/courses',
    name: 'Курсы',
    Icon: CoursesIcon,
    id: TopLevelCategory.Courses,
  },
  {
    route: '/services',
    name: 'Сервисы',
    Icon: ServicesIcon,
    id: TopLevelCategory.Services,
  },
  {
    route: '/books',
    name: 'Книги',
    Icon: BooksIcon,
    id: TopLevelCategory.Books,
  },
  {
    route: '/products',
    name: 'Товары',
    Icon: ProductsIcon,
    id: TopLevelCategory.Products,
  },
];

const Menu = (props: MenuProps) => {
  const { ...otherProps } = props;

  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildTopLevelCategory = () => {
    return (
      <ul className={styles.firstLevelLinkContainer}>
        {firstLevelMenu.map(({ route, name, Icon, id }) => (
          <li key={route}>
            <LinkTag
              className={styles.firstLevelLink}
              target="_self"
              href={route}
            >
              <Icon className={styles.firstLevelLinkIcon} />
              <span className={styles.firstLevelLinkName}>{name}</span>
            </LinkTag>
            {id == firstCategory && buildSecondLevelCategory(route)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevelCategory = (route: string) => {
    return (
      <ul className={styles.secondLevelContainer}>
        {menu.map(({ _id, isOpened, pages }) => (
          <li key={_id.secondCategory}>
            <div className={styles.secondLevel}>{_id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: isOpened,
              })}
            >
              {buildThirdLevelCategory(pages, route)}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const buildThirdLevelCategory = (pages: Array<PageItem>, route: string) => {
    return (
      <ul className={styles.thirdLevelContainer}>
        {pages.map(({ alias, category }) => (
          <li key={alias}>
            <LinkTag
              href={`${route}/${alias}`}
              target="_self"
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: true,
              })}
            >
              {category}
            </LinkTag>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.menu} {...otherProps}>
      {buildTopLevelCategory()}
    </div>
  );
};

export default Menu;
