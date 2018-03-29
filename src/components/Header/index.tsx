import * as React from 'react'
import { HeaderContainer, HeaderContent, LogoTitleWrapper, LogoTitle, NavigationList, NavigationListItem, HeaderLink , FirstHeaderLink } from './styled'

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <LogoTitleWrapper>
        <LogoTitle to="/">Brandon Hedrick</LogoTitle>
      </LogoTitleWrapper>
      <nav>
        <NavigationList>
          <NavigationListItem>
            <FirstHeaderLink to='/'>About</FirstHeaderLink>
          </NavigationListItem>
          <NavigationListItem>
            <HeaderLink to='/'>Skills</HeaderLink>
          </NavigationListItem>
          <NavigationListItem>
            <HeaderLink to='/'>Work</HeaderLink>
          </NavigationListItem>
        </NavigationList>
      </nav>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
