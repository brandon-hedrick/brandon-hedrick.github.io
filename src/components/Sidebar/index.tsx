import * as React from 'react';

import { StyledGithubIcon, StyledTwitterIcon, StyleLinkedInIcon, SideBarWrapper, SideBarSocialWrapper, SideBarSocial,
  } from './styled';

const SideBar = () => (
  <SideBarWrapper>
    <SideBarSocialWrapper>
      <SideBarSocial>
        <a href='https://www.linkedin.com/in/blhedrick/' target='_blank'>
          <StyleLinkedInIcon/>
        </a>
        <a href='https://github.com/brandon-hedrick/' target='_blank'>
          <StyledGithubIcon/>
        </a>
        <a href='https://twitter.com/BLHedrick' target='_blank'>
          <StyledTwitterIcon/>
        </a>
      </SideBarSocial>
    </SideBarSocialWrapper>
  </SideBarWrapper>
);

export default SideBar;
