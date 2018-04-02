import * as React from 'react';
import { TitularLayoutWrapper, Title, Subtitle } from './styled'

interface TitularLayoutProps {
  title: string;
  subtitle?: string;
}

const TitularLayout: React.SFC<TitularLayoutProps> = ({title, subtitle}) => (
  <TitularLayoutWrapper>
    <Title>{title}</Title>
    {
      subtitle &&
      <Subtitle>{subtitle}</Subtitle>
    }
  </TitularLayoutWrapper>
)

export default TitularLayout
