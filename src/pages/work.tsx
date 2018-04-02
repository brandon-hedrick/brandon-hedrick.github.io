import * as React from 'react'
import SplitLayout from '../components/SplitLayout'
import TitularLayout from '../components/TitularLayout'

const LightCol = () => (
  <TitularLayout title={'Work'} subtitle={"I like making cool stuff"}/>
)

const DarkCol = () => (
  <div>
  </div>
)

const WorkPage = () => (
  <SplitLayout
    light={
      <LightCol/>
    }
    dark={
      <DarkCol/>
    }
  />
)

export default WorkPage