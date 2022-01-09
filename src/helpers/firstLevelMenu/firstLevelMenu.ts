import { IFirstLevelMenuItem } from '@/layouts/MainLayout/Menu/Menu.types';
import CoursesIcon from '@/assets/icons/graduation_hat.svg';
import { TopLevelCategory } from '@/services/TopPages';
import ServicesIcon from '@/assets/icons/cloud.svg';
import BooksIcon from '@/assets/icons/book.svg';
import ProductsIcon from '@/assets/icons/box.svg';

export const firstLevelMenu: Array<IFirstLevelMenuItem> = [
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
