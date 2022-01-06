import React from 'react';
import { withMainLayout } from '@/layouts';
import { GetStaticProps } from 'next';

const HomePage = () => {
  return <div>Привет мир!!!</div>;
};

export default withMainLayout(HomePage);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  return {
    props: {},
  };
};
