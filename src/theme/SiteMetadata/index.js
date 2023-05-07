import React from 'react';
import SiteMetadata from '@theme-original/SiteMetadata';
import Head from '@docusaurus/Head';

export default function SiteMetadataWrapper(props) {
  return (
    <>
      <SiteMetadata {...props} />
      <Head>
        <link rel="icon" href="/img/favicon-white.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/img/favicon.ico" media="(prefers-color-scheme: light)" />
      </Head>
    </>
  );
}
