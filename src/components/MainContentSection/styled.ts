import styled from 'styled-components';

import { StyledTypography } from '../../styles/typography';
import { MobileLikeFormat } from '../../styles/breakpoints';

export const StyledParagraphWrapper = styled.div`
  margin-top: 1rem;
  padding-top: 1.5rem;
  padding-left: 2.5rem;
  overflow: scroll;
  ${StyledTypography.paragraph}
  ${MobileLikeFormat(
    `padding-left: 0rem;`,
  )}
`;
