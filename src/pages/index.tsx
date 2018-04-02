import * as React from 'react'
import SplitLayout from '../components/SplitLayout'
import TitularLayout from '../components/TitularLayout'

const LightCol = () => (
  <TitularLayout title={'About'} subtitle={"I\'m a Javascript developer"}/>
)

const DarkCol = () => (
  <div>
  </div>
)

const AboutPage = () => (
  <SplitLayout
    light={
      <LightCol/>
    }
    dark={
      <DarkCol/>
    }
  />
)

export default AboutPage
