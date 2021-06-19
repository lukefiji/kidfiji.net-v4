import * as React from 'react';
import tw from 'tailwind-styled-components';
import lfLogo from '../images/luke-fiji-logo.svg';
import RotatingCube from '../components/RotatingCube';
import { keyframes, createGlobalStyle } from 'styled-components';
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

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet title="Luke Fiji" defer={false} />
      <PageWrapper>
        <title>Luke Fiji</title>

        <div>
          <Container>
            <Image src={lfLogo} alt="Luke Fiji logo" />
          </Container>

          <Container>
            <Heading>Hey there, I'm Luke.</Heading>
            <Paragraph>
              I'm a curious problem-solver with an eager passion for learning.
            </Paragraph>
          </Container>

          <Container>
            <Heading>Experience</Heading>

            <ul>
              <ListItem>
                <Link href="https://www.kbb.com/">Kelley Blue Book</Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.gemfind.com/">GemFind</Link>
              </ListItem>
              <ListItem>
                <Paragraph>RK Tech</Paragraph>
              </ListItem>
              <ListItem>
                <Link href="https://www.ohmanclothing.com/">
                  Oh Man! Clothing
                </Link>
              </ListItem>
            </ul>
          </Container>

          <Container>
            <Heading>Links</Heading>

            <ul>
              <ListItem>
                <Link href="mailto:luke.fiji@gmail.com">Email</Link>
              </ListItem>

              <ListItem>
                <Link href="https://www.linkedin.com/in/lukefiji/">
                  LinkedIn
                </Link>
              </ListItem>

              <ListItem>
                <Link href="https://twitter.com/luke_fiji">Twitter</Link>
              </ListItem>

              <ListItem>
                <Link href="https://github.com/lukefiji">GitHub</Link>
              </ListItem>
            </ul>
          </Container>
        </div>
      </PageWrapper>
      <RotatingCube />
    </>
  );
};

export default IndexPage;
