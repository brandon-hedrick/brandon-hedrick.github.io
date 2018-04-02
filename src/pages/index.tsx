import * as React from 'react';
import styled from 'styled-components';

import Img from 'gatsby-image';
import SplitLayout from '../components/SplitLayout';
import MainContentSection from '../components/MainContentSection';

const AboutPage: React.SFC<AboutPageProps> = ({ data }) => (
  <SplitLayout
  primary={
    <Primary/>
  }
  secondary={
    <Secondary heroImage={data.heroImage}/>
  }
  />
);

export default AboutPage;

interface HeroImage {
  sizes: object;
}
interface AboutPageProps {
  data: {
    heroImage: HeroImage;
  };
}

interface DarkColProps {
  heroImage: HeroImage;
}

// to avoid linting error using mixed quotes in jsx  with ts
const subtitle = 'I\'m a Javascript developer';

const Primary = () => (
  <MainContentSection title={'About'} subtitle={subtitle}>
    <p>
      with a passion for creating stunning web apps using the latest technology. I strive to combine great UX with
      great code to deliver the best experience to consumers of my applications.
    </p>
    <p>
      I’ve been developing front end since 2012 when I learned HTML and CSS in an introductory course at Purdue
      University. I quickly became obsessed with creativity I could express through my code and designs.
    </p>
    <p>
      Upon graduating in 2014, I began work at a large scale digital consulting company where I was exposed to a whole
      new world of web technolgies. Shortly after that I began to shift my creative focus from design and UX to a
      passion for code.
    </p>
    <p>
      Read more about what I’ve learned along the way.
    </p>
  </MainContentSection>
);

const Secondary: React.SFC<DarkColProps> = ({ heroImage }) => (
  <HeroImage sizes={heroImage.sizes} />
);

export const query = graphql`
  query IndexQuery {
    heroImage: imageSharp(id: { regex: "/hero/" }) {
      sizes(maxWidth: 2560 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

const HeroImage = styled(Img)`
  height: 100vh;
`;
