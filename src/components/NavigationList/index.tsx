import * as React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { StyledTypography } from '../../styles/typography';
import { MobileLikeFormat } from '../../styles/breakpoints';

import { NavigationListItem, NavigationListUl } from './styled';

const NavigationList = () => (
  <nav>
    <NavigationListUl>
      <NavigationListItem>
        <HeaderLink first to='/'>About</HeaderLink>
      </NavigationListItem>
      <NavigationListItem>
        <HeaderLink to='/skills'>Skills</HeaderLink>
      </NavigationListItem>
      <NavigationListItem>
        <HeaderLink to='/work'>Work</HeaderLink>
      </NavigationListItem>
    </NavigationListUl>
  </nav>
);

export default NavigationList;

interface HeaderLinkProps {
  className?: string;
  to: string;
  children: any;
  first?: boolean;
}

const LinkWrap: React.SFC<HeaderLinkProps> = ({to, className, children}) => (
  <Link to={to} className={className}>{children}</Link>
);

export const HeaderLink = styled(LinkWrap)`
  ${StyledTypography.headerNav}
  margin-left: ${(props: HeaderLinkProps) => props.first ? '0' : '2.5rem'};
  text-decoration: none;
  ${MobileLikeFormat(`
    display: none;
  `)}
`;
