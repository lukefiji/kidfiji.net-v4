import { Link as GatsbyLink } from 'gatsby';
import tw from 'twin.macro';

/**
 * Tailwind Breakpoints:
 * sm  : 640px
 * md  : 768px
 * lg  : 1024px
 * xl  : 1280px
 * 2xl : 1536px
 */

const bodyText = `
  text-primary
  text-lg
  lg:text-xl
`;

export const PageWrapper = tw.main`
  font-sans
  p-8
  md:p-12
  lg:p-16
`;

export const Container = tw.div`
  mb-8
  md:mb-12
  lg:mb-16
`;

export const Heading = tw.h1`
  font-bold
  text-3xl
  md:text-4xl
  lg:text-5xl
  mb-4
  md:mb-6
  lg:mb-8

  text-primary
`;

export const Paragraph = tw.p`
  ${bodyText}
  mb-4
  md:mb-6
`;

export const ListItem = tw.li`
  ${bodyText}
  mb-4
  md:mb-6
`;

export const Link = tw(GatsbyLink)`
  ${bodyText}
  underline
`;

export const AnchorLink = tw.a`
  ${bodyText}
  underline
`;
