import * as React from 'react';

import TitularLayout from '../TitularLayout';
import { SplitColumn } from '../SplitLayout/styled';
import { StyledParagraphWrapper } from './styled';

interface MainContentSectionProps {
  children: any;
  title: string;
  subtitle?: string;
}

const MainContentSection: React.SFC<MainContentSectionProps> = ({ children, title, subtitle }) => (
  <SplitColumn>
    <TitularLayout title={title} subtitle={subtitle} />
    <StyledParagraphWrapper>
      { children }
    </StyledParagraphWrapper>
  </SplitColumn>
);

export default MainContentSection;
