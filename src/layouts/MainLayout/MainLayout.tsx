import React, { FunctionComponent } from 'react';
import { MainLayoutProps } from './MainLayout.types';
import styles from './MainLayout.module.scss';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { AppContextProvider, IAppContext } from '@/context';

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

const withMainLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withMainLayoutComponent(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      </AppContextProvider>
    );
  };
};

export default withMainLayout;
