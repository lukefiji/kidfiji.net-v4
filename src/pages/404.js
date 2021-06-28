import * as React from 'react';
import Helmet from 'react-helmet';
import {
  Container,
  Heading,
  Paragraph,
  Link,
} from '../components/styledComponents';

const NotFoundPage = () => {
  return (
    <>
      <Helmet title="Luke Fiji | Not found" />
      <Container>
        <Heading>Page not found</Heading>
        <Paragraph>Sorry, I couldn’t find what you were looking for.</Paragraph>
        <Paragraph>
          <Link to="/">Go home</Link>.
        </Paragraph>
      </Container>
    </>
  );
};

export default NotFoundPage;
