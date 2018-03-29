import * as React from 'react'
import SplitLayout from '../components/SplitLayout'

const LightCol = () => (
  <h1>
    WorkPage
  </h1>
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