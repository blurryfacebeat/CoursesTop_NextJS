import React from 'react';
import { withMainLayout } from '@/layouts';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getMenu, getPage, getProducts } from '@/services';
import { MenuItem, ProductModel, TopPageModel } from '@/services/TopPages';
import { ParsedUrlQuery } from 'querystring';

const firstCategory = 0;

const Course = (props: CourseProps) => {
  const { menu, page, products } = props;

  return <>{products?.length}</>;
};

export default withMainLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const menu = await getMenu({ firstCategory });

  return {
    paths: menu.flatMap((item) =>
      item.pages.map((page) => `/courses/${page.alias}`)
    ),
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

  const menu = await getMenu({ firstCategory });
  const page = await getPage(params.alias);
  const products = await getProducts({
    category: page.category,
    limit: 10,
  });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: Array<MenuItem>;
  firstCategory: number;
  page: TopPageModel;
  products: Array<ProductModel>;
}
