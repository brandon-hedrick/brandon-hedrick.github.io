import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../../styles/colors';

const LoadingIcon = () => (
  <LoadingIconWrapper>
    <StyledLoadingIconPip></StyledLoadingIconPip>
    <StyledLoadingIconPip offset={1}></StyledLoadingIconPip>
    <StyledLoadingIconPip offset={2}></StyledLoadingIconPip>
  </LoadingIconWrapper>
);

export default LoadingIcon;

const LoadingIconWrapper = styled.div`
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

interface LoadingIconPip {
  offset?: number;
  className?: string;
}

const LoadingIconPip: React.SFC<LoadingIconPip> = ({ className }) => (
  <div className={className}>
  </div>
);

const StyledLoadingIconPip = styled(LoadingIconPip)`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${Colors.grey};
  border-radius: 100%;
  display: inline-block;
  animation: ${bouncedelay} .8s infinite ease-in-out both;
  animation-delay: ${(props: LoadingIconPip) => props.offset ? `${props.offset * .1}s` : 0};
`;
