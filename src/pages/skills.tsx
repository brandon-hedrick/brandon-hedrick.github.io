import * as React from 'react'
import SplitLayout from '../components/SplitLayout'

const LightCol = () => (
  <h1>
    SkillsPage
  </h1>
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
