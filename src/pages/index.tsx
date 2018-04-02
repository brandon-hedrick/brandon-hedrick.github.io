import * as React from 'react'
import styled from 'styled-components'

import Img from "gatsby-image";
import SplitLayout from '../components/SplitLayout'
import TitularLayout from '../components/TitularLayout'

interface HeroImage {
  sizes: object
}
interface AboutPageProps {
  data: {
    heroImage: HeroImage
  }
}

interface DarkColProps {
  heroImage: HeroImage
}

const LightCol = () => (
  <TitularLayout title={'About'} subtitle={"I\'m a Javascript developer"}/>
)

const DarkCol: React.SFC<DarkColProps> = ({ heroImage }) => (
  <div>
    <HeroImage sizes={heroImage.sizes} />
  </div>
)


const AboutPage: React.SFC<AboutPageProps> = ({ data }) => (
  <SplitLayout
  light={
    <LightCol/>
  }
  dark={
    <DarkCol heroImage={data.heroImage}/>
  }
  />
)

export default AboutPage

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
`