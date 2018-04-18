import * as React from 'react';

import { SkillsListTitle, StyledList, StyledItem , StyledAnchor} from './styled';
import styled from 'styled-components';

export interface SkillsListProps {
  title: string;
  skills: SkillProps[];
}

interface SkillProps {
  title: string;
  href?: string;
}

export const SkillsList: React.SFC<SkillsListProps> = ({ title, skills }) => (
  <div>
    <SkillsListTitle>{title}</SkillsListTitle>
    <StyledList>
      { CreateSkills(skills) }
    </StyledList>
  </div>
);

export default SkillsList;

const Skill: React.SFC<SkillProps> = ({ title, href }) => (
  <StyledItem>
    {href && <StyledAnchor href={href} target='_blank'>{title}</StyledAnchor>}
    {!href && title}
  </StyledItem>
);

const CreateSkills = (skills: SkillProps[] = []) =>
  skills.map(({ title, href }: SkillProps, index) =>
    <Skill key={index} href={href} title={title} />,
  );
