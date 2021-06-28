import * as React from 'react';
import {
  Container,
  Heading,
  Paragraph,
  AnchorLink,
  ListItem,
} from '../components/styledComponents';
import contactList from '../constants/contactList';
import experienceList from '../constants/experienceList';

const LinkList = ({ items }) => (
  <ul>
    {items.map(({ title, url }) => (
      <ListItem key={title}>
        {url ? (
          <AnchorLink href={url}>{title}</AnchorLink>
        ) : (
          <Paragraph>{title}</Paragraph>
        )}
      </ListItem>
    ))}
  </ul>
);

const IndexPage = () => {
  return (
    <>
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
    </>
  );
};

export default IndexPage;
