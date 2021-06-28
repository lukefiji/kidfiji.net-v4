import React from 'react';
import { GlobalStyles } from 'twin.macro';
import { Helmet } from 'react-helmet';
import BaseStyles from '../components/BaseStyles';
import Logo from '../components/Logo';
import RotatingCube from './RotatingCube';
import { PageWrapper, Container } from './styledComponents';
import ThemeToggler from './ThemeToggler';

export default function BaseLayout({ children, title = 'Luke Fiji' }) {
  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        {/* <link rel="canonical" href="https://kidfiji.net" /> */}
      </Helmet>

      <GlobalStyles />
      <BaseStyles />

      <PageWrapper>
        <Container>
          <ThemeToggler />

          <Logo />
        </Container>
        {children}
      </PageWrapper>

      <RotatingCube />
    </>
  );
}
