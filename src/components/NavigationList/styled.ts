import styled from 'styled-components';
import { MobileLikeFormat } from '../../styles/breakpoints';
import { StyledTypography } from '../../styles/typography';

export const NavigationListUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  justify-content: flex-end;
`;

export const NavigationListItem = styled.li`
  margin: 0;
  ${ StyledTypography.headerNav }
`;
