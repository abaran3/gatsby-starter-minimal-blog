/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import useSiteMetadata from '../hooks/use-site-metadata';
import logo from './logo.jpg';

const Footer = () => {
  const { author } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        // flexDirection: [`column`, `column`, `row`],
        // flexDirection: 'row',
        flexDirection: 'column',
        variant: `dividers.top`,
      }}
    >
      <div>&copy; {new Date().getFullYear()}. Figureable.</div>
      <div>
        <p></p>
      </div>
      <div>
        <a href="https://stimuleringsfonds.nl/en/">
          <img src={logo} alt="Creative Industries Fund NL" width="220px" />
        </a>

        {/* <Styled.a
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
          Theme
        </Styled.a>
        {` `}
        by
        {` `}
        <Styled.a aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          LekoArts
        </Styled.a> */}
      </div>
    </footer>
  );
};

export default Footer;
