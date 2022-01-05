import React, { FunctionComponent } from 'react';
import { MainLayoutProps } from './MainLayout.types';
import styles from './MainLayout.module.scss';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const withMainLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withMainLayoutComponent(props: T) {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};

export default withMainLayout;
