export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface ID {
  secondCategory: string;
}

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: ID;
  isOpened?: boolean;
  pages: Array<PageItem>;
}

export interface TopPageAdvantage {
  _id: string;
  title: string;
  description: string;
}

export interface HhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}

export interface TopPageModel {
  tags: Array<string>;
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: Array<TopPageAdvantage>;
  createdAt: Date;
  updatedAt: Date;
  hh: HhData;
}

export interface ProductCharacteristics {
  value: string;
  name: string;
}

export interface ReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface ProductModel {
  _id: string;
  categories: Array<string>;
  tags: Array<string>;
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: Array<ProductCharacteristics>;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: string;
  initialRating: number;
  reviews: Array<ReviewModel>;
  reviewCount: number;
  reviewAvg?: number;
  advantages: string;
}
