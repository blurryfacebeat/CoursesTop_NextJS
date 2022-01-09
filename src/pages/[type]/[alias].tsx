import React from 'react';
import { withMainLayout } from '@/layouts';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getMenu, getPage, getProducts } from '@/services';
import {
  MenuItem,
  ProductModel,
  TopLevelCategory,
  TopPageModel,
} from '@/services/TopPages';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '@/helpers';

const Course = (props: CourseProps) => {
  const { menu, page, products } = props;

  return <>{products?.length}</>;
};

export default withMainLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: Array<string> = [];

  for (const { id, route } of firstLevelMenu) {
    const menu = await getMenu({ firstCategory: id });
    paths = paths.concat(
      menu.flatMap((item) => item.pages.map((page) => `${route}/${page.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find(
    ({ route }) => route === params.type
  );

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const menu = await getMenu({ firstCategory: firstCategoryItem.id });

    if (!menu.length) {
      return {
        notFound: true,
      };
    }

    const page = await getPage(params.alias);
    const products = await getProducts({
      category: page.category,
      limit: 10,
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: Array<MenuItem>;
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: Array<ProductModel>;
}
