import * as React from 'react';
import {
  Container,
  Heading,
  Paragraph,
  Link,
} from '../components/styledComponents';

import BaseLayout from '../components/BaseLayout';

const NotFoundPage = () => {
  return (
    <BaseLayout title="Luke Fiji | Not found">
      <Container>
        <Heading>Page not found</Heading>
        <Paragraph>Sorry, I couldn’t find what you were looking for.</Paragraph>
        <Paragraph>
          <Link to="/">Go home</Link>.
        </Paragraph>
      </Container>
    </BaseLayout>
  );
};

export default NotFoundPage;
