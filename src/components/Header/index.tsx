import * as React from 'react';

import NavigationList from '../NavigationList';
import HamburgerMenu from '../HamburgerMenu';
import MobileNavigation from '../MobileNavigation';

import { HeaderContainer, HeaderContent, LogoTitleWrapper, LogoTitle } from './styled';
import { ScreenResize } from '../../styles/breakpoints';

interface HeaderState {
  shouldRenderMobileLike: boolean;
  isMenuOpen: boolean;
}

class Header extends React.Component<{}, HeaderState> {
  private mobileLike$: any;

  constructor(props: any) {
    super(props);
    this.state = {
      isMenuOpen: false,
      shouldRenderMobileLike: false,
    };
  }

  componentDidMount() {
    this.mobileLike$ = ScreenResize
      .resizeEvents()
      .subscribe('shouldRenderMobileLike',
        (shouldRenderMobileLike: boolean) => {
          this.setState(
            {
              isMenuOpen: shouldRenderMobileLike && this.state.isMenuOpen,
              shouldRenderMobileLike,
            },
          );
        }, true);
  }

  menuToggle = () => this.setState({ isMenuOpen : !this.state.isMenuOpen });

  componentWillUnmount() {
    this.mobileLike$.unsubscribe();
  }

  render() {
    return (
      <HeaderContainer>
        <HeaderContent>
          <LogoTitleWrapper>
            <LogoTitle to='/'>Brandon Hedrick</LogoTitle>
          </LogoTitleWrapper>
          {
            !this.state.shouldRenderMobileLike &&
            <NavigationList />
          }
          {
            this.state.shouldRenderMobileLike &&
            <HamburgerMenu  open={this.state.isMenuOpen} clickHandler={this.menuToggle} />
          }
        </HeaderContent>
        {
          this.state.isMenuOpen && this.state.shouldRenderMobileLike &&
          <MobileNavigation closeHandler={this.menuToggle}/>
        }
      </HeaderContainer>
    );
  }
}

export default Header;
