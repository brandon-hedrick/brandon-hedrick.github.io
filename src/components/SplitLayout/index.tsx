import * as React from 'react'
import { Wrapper, LightColumn, DarkColumn } from './styled'

interface SplitLayoutProps {
  light: React.SFC,
  dark: React.SFC;
}

const SplitLayout: React.SFC<SplitLayoutProps> = ({ light, dark }) => (
  <Wrapper>
    <LightColumn>{light}</LightColumn>
    <DarkColumn>{dark}</DarkColumn>
  </Wrapper>
)

export default SplitLayout
