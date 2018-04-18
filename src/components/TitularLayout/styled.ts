
import styled from 'styled-components';

import { StyledTypography } from '../../styles/typography';
import { MobileLikeFormat } from '../../styles/breakpoints';

export const TitularLayoutWrapper = styled.div`
  position: relative;
  padding-bottom: 1rem;
`;

export const Title = styled.h2`
  ${StyledTypography.pageTitle}
  line-height: 8.75rem;
  margin: 0;
  ${MobileLikeFormat(`
  line-height: auto;
  `)}
`;

export const Subtitle = styled.h3`
  ${StyledTypography.pageSubtitle}
  left: 2.5rem;
  position: absolute;
  bottom: 0.1rem;
  margin: 0;
  ${MobileLikeFormat(`
    position: static;
  `)}
`;
