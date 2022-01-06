import React from 'react';
import { withMainLayout } from '@/layouts';
import { GetStaticProps } from 'next';
import { getMenu } from '@/services';
import { MenuItem } from '@/services/TopPages';

const HomePage = (props: HomeProps) => {
  const { menu, firstCategory } = props;

  return <div>Привет мир!!!</div>;
};

export default withMainLayout(HomePage);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;

  const menu = await getMenu({ firstCategory });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: Array<MenuItem>;
  firstCategory: number;
}
