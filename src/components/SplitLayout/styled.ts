import styled from 'styled-components';

import { Colors } from '../../styles/colors';
import { MobileLikeFormat } from '../../styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: stretch;
  ${MobileLikeFormat(`
    flex-direction: column;
    height: auto;
  `)}
`;

export const Primary = styled.main`
  padding: 8.25rem 4rem 4rem 7.25rem;
  width: 50%;
  ${MobileLikeFormat(`
    padding: 14rem 4rem 4rem;
    width: 100%;
  `)}
`;

export const Secondary = styled.div`
  background-color: ${Colors.darkGrey};
  width: 50%;
  ${MobileLikeFormat(`
    width: 100%;
    padding-top: 4rem;
  `)}
`;

// to be imported as the default layout used at page level columns
export const SplitColumn = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
