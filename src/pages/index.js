import * as React from 'react';
import tw from 'tailwind-styled-components';
import lfLogo from '../images/luke-fiji-logo.svg';
import RotatingCube from '../components/RotatingCube';
import { keyframes, createGlobalStyle } from 'styled-components';
import contactList from '../constants/contactList';
import experienceList from '../constants/experienceList';
import { Helmet } from 'react-helmet';

const PageWrapper = tw.main`
  font-sans
  p-12
  lg:p-16
`;

const Image = tw.img`
  w-16
`;

const Container = tw.div`
  mb-12
  lg:mb-16
`;

const Heading = tw.h1`
  font-bold
  text-4xl
  lg:text-5xl
  mb-6
  lg:mb-8
`;

const Paragraph = tw.p`
  text-lg
  lg:text-xl
`;

const Link = tw.a`
  text-lg
  lg:text-xl
  underline
`;

const ListItem = tw.li`
  mb-6
`;

const renderLinkList = (items) => (
  <ul>
    {items.map(({ title, url }) => (
      <ListItem key={title}>
        {url ? <Link href={url}>{title}</Link> : <Paragraph>{title}</Paragraph>}
      </ListItem>
    ))}
  </ul>
);

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>Luke Fiji</title>
        <link rel="canonical" href="https://kidfiji.net" />
      </Helmet>

      <PageWrapper>
        <Container>
          <Image src={lfLogo} alt="Luke Fiji logo" />
        </Container>

        <Container>
          <Heading>Hey there, I'm Luke.</Heading>
          <Paragraph>
            I am a curious problem-solver with an eager passion for learning.
          </Paragraph>
        </Container>

        <Container>
          <Heading>Experience</Heading>

          {renderLinkList(experienceList)}
        </Container>

        <Container>
          <Heading>Links</Heading>

          {renderLinkList(contactList)}
        </Container>
      </PageWrapper>

      <RotatingCube />
    </>
  );
};

export default IndexPage;
