import React from 'react';
import { withMainLayout } from '@/layouts';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getMenu } from '@/services';
import { MenuItem } from '@/services/TopPages';
import { firstLevelMenu } from '@/helpers';
import { ParsedUrlQuery } from 'querystring';

const Type = (props: TypeProps) => {
  const { firstCategory } = props;

  return <div>Hello: {firstCategory}</div>;
};

export default withMainLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(({ route }) => route),
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

  const menu = await getMenu({ firstCategory: firstCategoryItem.id });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: Array<MenuItem>;
  firstCategory: number;
}
