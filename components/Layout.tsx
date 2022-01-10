import React from 'react';
import Head from 'next/head';
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';

import styles from '@styles/Home.module.css';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ title = 'Alex Reed', children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="author" content="Alex Reed" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Alex Reed" />
        <meta
          property="og:description"
          content="I am an engineer, builder, and learner - interested in many facets of technology."
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:site" content="@alexjreed7" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://shellbear.me/img/preview.png"
        />
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-RZP6RWZ32F"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
      
                  gtag('config', 'G-RZP6RWZ32F');`,
              }}
            />
          </>
        )}
      </Head>
      <Nav
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
      <Container justifyContent="space-between" alignContent="space-between">
        {!isOpen && <main className={styles.main}>{children}</main>}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
