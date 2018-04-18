import styled from 'styled-components';

import Link from 'gatsby-link';

import { Colors } from '../../styles/colors';
import { StyledTypography } from '../../styles/typography';
import { MobileLikeFormat } from '../../styles/breakpoints';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 50%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  ${MobileLikeFormat(`
    width: 100%;
  `)}
`;

export const HeaderContent = styled.div`
  padding: 1.5rem 4rem 1.5rem 7.25rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: ${Colors.white};
  height: 6.25rem;
  flex-shrink: 0;
  ${MobileLikeFormat(`
    height: 8.25rem;
    padding-left: 4rem;
    align-items: center;
    border-bottom: 1px solid ${Colors.grey};
  `)}
`;

export const LogoTitle = styled(Link)`
  text-decoration: none;
  ${StyledTypography.logoTitle}
`;

export const LogoTitleWrapper = styled.h1`
  margin: 0;
`;
