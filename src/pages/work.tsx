import * as React from 'react';
import styled from 'styled-components';

import SplitLayout from '../components/SplitLayout';
import { SplitColumn } from '../components/SplitLayout/styled';
import MainContentSection from '../components/MainContentSection';
import GithubProjects from '../components/GithubProjects';

import { StyledTypography } from '../styles/typography';

const WorkPage = () => (
  <SplitLayout
    primary={
      <Primary/>
    }
    secondary={
      <Secondary/>
    }
  />
);

export default WorkPage;

const Primary = () => (
  <MainContentSection title={'Work'} subtitle={'I like to make cool stuff...'}>
    <p>
      With my current job, I’m not legally allowed to share any of the code I’ve written or release any client
      information. With that said, I make all kinds of cool stuff in my free time.
    </p>
    <p>
      Over the years I’ve started on lots of projects that I used to learn new libraries, concepts or maybe just to do
      something fun. I even finished some of them too!
    </p>
    <p>
      Here you’ll find a list of projects from my Github. Feel free to check me out and see what I’ve been up to
      lately!
    </p>
  </MainContentSection>
);

const Secondary = () => (
  <StyledSplitColumn>
    <GithubProjectsTitle>I've Made...</GithubProjectsTitle>
    <GithubProjects/>
  </StyledSplitColumn>
);

const StyledSplitColumn = styled(SplitColumn)`
  padding: 2rem 4rem 4rem;
  overflow: auto;
`;

export const GithubProjectsTitle = styled.h4`
  margin: 0;
  margin-bottom: 4.375rem;
  ${StyledTypography.darkTitle}
`;
