import styled from 'styled-components';

import { Colors } from '../../styles/colors';
import { StyledTypography } from '../../styles/typography';
import { MobileLikeFormat } from '../../styles/breakpoints';

export const MobileNavigationWrapper = styled.div`
  height: 100vh;
  background-color: ${Colors.white};
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  list-style: none;
  padding: 2rem;
`;

export const NavigationLink  = styled.li`
  ${StyledTypography.pageTitle};
  padding: 5.5rem 0;
  ${MobileLikeFormat(
    `font-size: 10rem;`,
  )}
`;
