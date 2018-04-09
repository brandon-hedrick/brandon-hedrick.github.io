import * as React from 'react';
import { LoadingIconWrapper, LoadingIconPip, FirstLoadingIconPip, SecondLoadingIconPip } from './styled';

const LoadingIcon = () => (
  <LoadingIconWrapper>
    <FirstLoadingIconPip></FirstLoadingIconPip>
    <SecondLoadingIconPip></SecondLoadingIconPip>
    <LoadingIconPip></LoadingIconPip>
  </LoadingIconWrapper>
);

export default LoadingIcon;
