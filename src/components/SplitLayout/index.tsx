import * as React from 'react';

import { Wrapper, Primary, Secondary } from './styled';

interface SplitLayoutProps {
  primary: any;
  secondary: any;
}

const SplitLayout: React.SFC<SplitLayoutProps> = ({ primary, secondary }) => (
  <Wrapper>
    <Primary>{primary}</Primary>
    <Secondary>{secondary}</Secondary>
  </Wrapper>
);

export default SplitLayout;
