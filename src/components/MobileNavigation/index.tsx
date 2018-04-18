import * as React from 'react';
import { navigateTo } from 'gatsby-link';

import { MobileNavigationWrapper, NavList, NavigationLink } from './styled';

interface MobileNavigationProps {
  closeHandler: any;
}

class MobileNavigation extends React.Component<MobileNavigationProps, {}> {
  render() {
    return(
      <MobileNavigationWrapper>
        <NavList>
          <NavigationLink onClick={() => this.closeAndNavigate('./')} >About</NavigationLink>
          <NavigationLink onClick={() => this.closeAndNavigate('./skills')} >Skills</NavigationLink>
          <NavigationLink onClick={() => this.closeAndNavigate('./work')} >Work</NavigationLink>
        </NavList>
      </MobileNavigationWrapper>
    );
  }
  closeAndNavigate = (path: string) => {
    navigateTo(path);
    this.props.closeHandler();
  }
}

export default MobileNavigation;
