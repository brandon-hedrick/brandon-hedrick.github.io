import * as React from 'react'
import SplitLayout from '../components/SplitLayout'
import TitularLayout from '../components/TitularLayout'

const LightCol = () => (
  <TitularLayout title={'Skills'} subtitle={"Yeah, I\'ve got some skills"}/>
)

const DarkCol = () => (
  <div>
  </div>
)

const SkillsPage = () => (
  <SplitLayout
    light={
      <LightCol/>
    }
    dark={
      <DarkCol/>
    }
  />
)

export default SkillsPage
