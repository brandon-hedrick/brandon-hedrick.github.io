import * as React from 'react'
import { StyledTypography, Typography } from '../styles/typography'
import { Colors } from '../styles/colors';
import styled from 'styled-components';

const TypographyPage = () => (
  <Wrapper>
    <LightColumn>
      <LogoTitle>Logo Title</LogoTitle>
      <HeaderLink>Header Navigation</HeaderLink>
      <PageTitle>Page Title</PageTitle>
      <PageSubtitle>Page Subtitle</PageSubtitle>
      <Paragraph>Paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a sagittis enim. Nullam venenatis gravida efficitur. Phasellus tortor eros, semper eu consequat sit amet, fringilla ac eros. Nullam a suscipit mauris. Suspendisse sem elit, rutrum eu ante id, facilisis faucibus quam. Fusce id leo vitae tortor laoreet accumsan. Sed pulvinar lobortis est, vitae venenatis nibh vestibulum a. Quisque gravida, nibh nec mollis imperdiet, metus mauris malesuada magna, sed tempor purus risus id velit.</Paragraph>
    </LightColumn>
    <DarkColumn>
      <DarkTitle>Dark Title</DarkTitle>
      <DarkHeading>Dark Heading</DarkHeading>
    </DarkColumn>
  </Wrapper>  
)

/* 
PAGE STYLES:
Ideally this will never happen as the styling will happen at the component
level with _very_ minimal stlying happening on a page level template 
*/

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: stretch;
`

const Column = styled.div`
  width: 100%;
`

const LightColumn = Column.extend`
  padding: 8.25rem 4rem 4rem 7.25rem;
`

const DarkColumn = Column.extend`
  padding: 2rem 4rem;
  background-color: ${Colors.darkGrey}
`

const DarkSpan = styled.span`
  color: ${Colors.lightGrey}
`

const LogoTitle = styled.h1`
  ${StyledTypography.logoTitle}
`

const HeaderLink = styled.h4`
  ${StyledTypography.headerNav}
`

const PageTitle = styled.h2`
  ${StyledTypography.pageTitle}
`

const PageSubtitle = styled.h3`
  ${StyledTypography.pageSubtitle}
`

const Paragraph = styled.p`
  ${StyledTypography.paragraph}
`

const DarkTitle = styled.h4`
  ${StyledTypography.darkTitle}
`

const DarkHeading = styled.h5`
  ${StyledTypography.darkHeading}
`

export default TypographyPage
