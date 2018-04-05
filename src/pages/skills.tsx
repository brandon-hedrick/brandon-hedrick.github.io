import * as React from 'react';
import styled from 'styled-components';

import SplitLayout from '../components/SplitLayout';
import { SplitColumn } from '../components/SplitLayout/styled';
import MainContentSection from '../components/MainContentSection';
import { SkillsList, SkillsListProps} from '../components/SkillsList';

import { skillsContent } from '../data';

const SkillsPage = () => (
  <SplitLayout
  primary={
    <Primary/>
  }
  secondary={
    <Secondary content={skillsContent} />
  }
  />
);

export default SkillsPage;

interface SecondaryProps {
  content: SkillsListProps[];
}

const Primary = () => {
  // to avoid linting error using mixed quotes in jsx  with ts
  const subtitle = 'Yeah, I\'ve got some skills...';
  return (
    <MainContentSection title={'Skills'} subtitle={subtitle}>
      <p>
        I’ve been developing front end professionally for going on four years now. Over that time I’ve amassed quite a
        few tricks of the trade.
      </p>
      <p>
        When I first began work in 2014, I was introduced to several, powerful new tools: Jade, Sass, and Grunt/Gulp.
        These were amazing new tools to me that I used to streamline my workflow in ways I could only dream of
        previously.
      </p>
      <p>
        After a two years or so of working with static sites, I began to enter the world a javascript heavily
        applications and single page applications. My experience ranges from AngularJS to React (and React Native) and
        more recently Angular. I love working in Redux-like patterns and have grown very fond of writing asyncronous
        code with RxJS.
      </p>
      <p>
        Here you can see a complete list of my skills.
      </p>
    </MainContentSection>
  );
};

const Secondary: React.SFC<SecondaryProps> = ({ content }) => (
    <StyledSplitColumn>
      <StyledSkillsListList>
        { BuildSkillListList(content) }
      </StyledSkillsListList>
    </StyledSplitColumn>
  );

const BuildSkillListList = (skillsList: SkillsListProps[] = []) =>
  skillsList.map( ({ title, skills }, index ) =>
    <StyledSkillListItem key={index}>
      <SkillsList title={title} skills={skills} />
    </StyledSkillListItem>,
  );

const StyledSplitColumn = styled(SplitColumn)`
  padding: 2rem 4rem 4rem;
  overflow: auto;
`;

const StyledSkillsListList = styled.ul`
  margin: 0;
`;

const StyledSkillListItem = styled.li`
  margin-bottom: 6rem;
  list-style: none;
`;
