import styled from 'styled-components';

import Link from 'gatsby-link';

import { Colors } from '../../styles/colors';
import { StyledTypography } from '../../styles/typography';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 50%;
`;

export const HeaderContent = styled.div`
  padding: 1.5rem 4rem 1.5rem 7.25rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: ${Colors.white};
  height: 6.25rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LogoTitle = StyledLink.extend`
  ${StyledTypography.logoTitle}
`;

export const HeaderLink = StyledLink.extend`
  ${StyledTypography.headerNav}
  margin-left: 2.5rem;
`;

// this could be done with props if I wasn't using gatsby-link and TS 😫
export const FirstHeaderLink = HeaderLink.extend`
  margin-left: 0;
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  justify-content: flex-end;
`;

export const NavigationListItem = styled.li`
  margin: 0;
`;

export const LogoTitleWrapper = styled.h1`
  margin: 0;
`;
