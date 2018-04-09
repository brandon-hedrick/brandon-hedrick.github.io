import styled from 'styled-components';
import { StyledTypography } from '../../styles/typography';

export const SkillsListWrapper = styled.div`
`;

export const SkillsListTitle = styled.h4`
  margin: 0;
  margin-bottom: 4.375rem;
  ${StyledTypography.darkTitle}
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const StyledItem = styled.li`
  list-style: none;
  ${StyledTypography.darkHeading}
  padding: 2rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
