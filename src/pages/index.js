import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
// import Img from 'gatsby-image';

import Splash from '../components/layouts/Splash';
import SEO from '../components/Seo';
import Container from '../components/atoms/Container';
import BgImage from '../components/atoms/BgImage';
import MainNavigation from '../components/organisems/MainNavigation';
import Logo from '../components/atoms/Logo';
import { breakpoints } from '../components/tokens';
import CallToAction from '../components/atoms/CallToAction';

const { TITLE_BREAKPOINT } = breakpoints;

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background: rgba(0, 0, 0, 0.5);
  color: white;

  padding-top: 6rem;

  .js & {
    height: 100vh;
  }
`;

// Styling of h2.
const Location = styled.span`
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
`;

const Date = styled(Location)`
  .no-js & {
    margin-bottom: 5rem;
  }
`;

const Title = styled.h1`
  color: #fff;

  // Visually hidden on mobile
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */

  // Shown on desktop
  @media (min-width: ${TITLE_BREAKPOINT}) {
    // Reset visually hidden
    position: initial;
    width: auto;
    height: auto;
    overflow: initial;
    clip: unset;
    white-space: initial;

    // Normal style
    display: inline-block;
    vertical-align: middle;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 15px 0 1rem;
  }
`;

const SplashTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 15px 0 1rem;

  @media (min-width: ${TITLE_BREAKPOINT}) {
    display: none;
  }
`;

const IndexPage = ({ data }) => (
  <Splash>
    <SEO title={'Home'} />
    <MainNavigation>
      <Link to={'/'}>
        <Logo width={80} height={80} />
        <Title>{'RustFest.eu Netherlands'}</Title>
      </Link>
    </MainNavigation>
    <Hero>
      <BgImage
        fluid={data.file.childImageSharp.fluid}
        position={'center 10%'}
        height={'100%'}
      />
      <SplashTitle>{'RustFest.eu Netherlands'}</SplashTitle>
      <Location>Utrecht</Location> <Date>June 6 - 7</Date>
      <CallToAction
        style={{
          fontSize: '1.5rem',
          borderRadius: '0',
          position: 'absolute',
          bottom: 0,
        }}
        href={'#'}
      >
        <b>Buy Tickets</b>
      </CallToAction>
    </Hero>
    <Container>
      <div className="placeholder">
        <p>
          The RustFest Netherlands team are working hard behind the scenes on
          getting everything ready. We hope to tell you more soon so keep an eye
          on the{' '}
          <a href="https://blog.rustfest.eu/" title="The RustFest blog">
            RustFest blog
          </a>{' '}
          and follow us on{' '}
          <a href="https://twitter.com/rustfest" title="RustFest on Twitter">
            Twitter
          </a>
          !
        </p>
      </div>
    </Container>
  </Splash>
);

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "Noorderlicht_Juri_Hiensch.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1333) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
