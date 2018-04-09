import styled from 'styled-components';
import { keyframes, StyledComponentClass } from 'styled-components';

import { Colors } from '../../styles/colors';

export const LoadingIconWrapper = styled.div`
  width: 6rem;
  margin: auto auto;
  display: flex;
  align-items: center;
  justify-content:space-around;
`;

const bouncedelay = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

export const LoadingIconPip = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${Colors.grey};
  border-radius: 100%;
  display: inline-block;
  animation: ${bouncedelay} 1.4s infinite ease-in-out both;
`;

export const FirstLoadingIconPip = LoadingIconPip.extend`
  animation-delay -.32s
`;

export const SecondLoadingIconPip = LoadingIconPip.extend`
  animation-delay -.16s
`;
