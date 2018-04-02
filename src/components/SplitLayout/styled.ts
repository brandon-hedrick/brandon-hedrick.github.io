import styled from 'styled-components';

import { Colors } from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: stretch;
`;

const Column = styled.div`
  width: 100%;
`;

export const LightColumn = Column.extend`
  padding: 8.25rem 4rem 4rem 7.25rem;
`;

export const DarkColumn = Column.extend`
  background-color: ${Colors.darkGrey}
`;
