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
import { PageItem } from '@/services/TopPages';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu?.(
      menu.map((menuItem) => {
        if (menuItem._id.secondCategory === secondCategory) {
          menuItem.isOpened = !menuItem.isOpened;
        }

        return menuItem;
      })
    );
  };

  const buildTopLevelCategory = () => {
    return (
      <ul className={styles.firstLevelLinkContainer}>
        {firstLevelMenu.map(({ route, name, Icon, id }) => {
          let isActive = false;

          if (router.asPath.split('/')[1] === route.split('/')[1]) {
            isActive = true;
          }

          return (
            <li key={route}>
              <Link href={route}>
                <a
                  className={cn(styles.firstLevelLink, {
                    [styles.firstLevelLinkActive]: isActive,
                  })}
                  target="_self"
                >
                  <Icon className={styles.firstLevelLinkIcon} />
                  <span className={styles.firstLevelLinkName}>{name}</span>
                </a>
              </Link>
              {id == firstCategory && buildSecondLevelCategory(route)}
            </li>
          );
        })}
      </ul>
    );
  };

  const buildSecondLevelCategory = (route: string) => {
    return (
      <ul className={styles.secondLevelContainer}>
        {menu.map(({ _id, isOpened, pages }) => {
          if (
            pages
              .map((page) => page.alias)
              .includes(router.asPath.split('/')[2])
          ) {
            isOpened = true;
          }

          return (
            <li key={_id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(_id.secondCategory)}
              >
                {_id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: isOpened,
                })}
              >
                {buildThirdLevelCategory(pages, route)}
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevelCategory = (pages: Array<PageItem>, route: string) => {
    return (
      <ul className={styles.thirdLevelContainer}>
        {pages.map(({ alias, category }) => {
          let isActive = false;

          if (alias === router.asPath.split('/')[2]) {
            isActive = true;
          }

          return (
            <li key={alias}>
              <Link href={`${route}/${alias}`}>
                <a
                  target="_self"
                  className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: isActive,
                  })}
                >
                  {category}
                </a>
              </Link>
            </li>
          );
        })}
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
