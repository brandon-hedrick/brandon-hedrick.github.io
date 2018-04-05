import styled from 'styled-components';
import { StyledTypography } from '../../styles/typography';

export const SkillsListWrapper = styled.div`
  margin-bottom: 6rem;
`;

export const SkillsListTitle = styled.h4`
  margin: 0;
  margin-bottom: 4.375rem;
  ${StyledTypography.darkTitle}
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
`;

export const StyledItem = styled.li`
  list-style: none;
  ${StyledTypography.darkHeading}
  padding: 1.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
