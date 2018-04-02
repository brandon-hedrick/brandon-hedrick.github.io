import styled from 'styled-components';

import { Colors } from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: stretch;
`;

export const Primary = styled.main`
  padding: 8.25rem 4rem 4rem 7.25rem;
  width: 50%;
`;

export const Secondary = styled.div`
  background-color: ${Colors.darkGrey};
  width: 50%;
`;

// to be imported as the default layout used at page level columns
export const SplitColumn = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
