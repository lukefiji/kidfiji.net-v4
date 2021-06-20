import * as React from 'react';
import BaseLayout from '../components/BaseLayout';
import {
  Container,
  Heading,
  Paragraph,
  Link,
  ListItem,
} from '../components/styledComponents';
import contactList from '../constants/contactList';
import experienceList from '../constants/experienceList';

const LinkList = ({ items }) => (
  <ul>
    {items.map(({ title, url }) => (
      <ListItem key={title}>
        {url ? <Link to={url}>{title}</Link> : <Paragraph>{title}</Paragraph>}
      </ListItem>
    ))}
  </ul>
);

const IndexPage = () => {
  return (
    <BaseLayout>
      <Container>
        <Heading>Hey there, I'm Luke.</Heading>
        <Paragraph>
          I am a curious problem-solver with an eager passion for learning.
        </Paragraph>
      </Container>

      <Container>
        <Heading>Experience</Heading>

        <LinkList items={experienceList} />
      </Container>

      <Container>
        <Heading>Links</Heading>

        <LinkList items={contactList} />
      </Container>
    </BaseLayout>
  );
};

export default IndexPage;
