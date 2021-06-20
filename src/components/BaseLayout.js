import React from 'react';
import lfLogo from '../images/luke-fiji-logo.svg';
import { Helmet } from 'react-helmet';
import { keyframes, createGlobalStyle } from 'styled-components';
import RotatingCube from './RotatingCube';
import { PageWrapper, Container, Logo } from './styledComponents';

export default function BaseLayout({ children, title = 'Luke Fiji' }) {
  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        {/* <link rel="canonical" href="https://kidfiji.net" /> */}
      </Helmet>

      <PageWrapper>
        <Container>
          <Logo src={lfLogo} alt="Luke Fiji logo" />
        </Container>
        {children}
      </PageWrapper>

      <RotatingCube />
    </>
  );
}