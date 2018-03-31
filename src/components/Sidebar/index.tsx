import * as React from 'react'
import { StyledGithubIcon, StyledTwitterIcon, StyleLinkedInIcon, SideBarWrapper, SideBarSocialWrapper, SideBarSocial }
 from './styled'

const SideBar = () => (
  <SideBarWrapper>
    <SideBarSocialWrapper>
      <SideBarSocial>
        <StyleLinkedInIcon/>
        <StyledGithubIcon/>
        <StyledTwitterIcon/>
      </SideBarSocial>
    </SideBarSocialWrapper>
  </SideBarWrapper>
)

export default SideBar