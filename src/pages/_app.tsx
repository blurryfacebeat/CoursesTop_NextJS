import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import Head from 'next/head';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>NextJS Template</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
