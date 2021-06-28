import * as React from 'react';
import Helmet from 'react-helmet';
import {
  Container,
  Heading,
  Paragraph,
  Link,
} from '../../components/styledComponents';

const ProjectsPage = () => {
  return (
    <Helmet title="Luke Fiji | Projects">
      <Container>
        <Heading>Projects</Heading>
        <Paragraph>Coming soon</Paragraph>
        <Paragraph>
          <Link href="/">Go home</Link>.
        </Paragraph>
      </Container>
    </Helmet>
  );
};

export default ProjectsPage;
