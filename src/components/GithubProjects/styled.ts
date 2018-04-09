import styled from 'styled-components';
import { StyledTypography, titillium, butler } from '../../styles/typography';
import { Colors } from '../../styles/colors';
import { MobileLikeFormat } from '../../styles/breakpoints';

export const ProjectList = styled.ul`
  margin: 0
`;

export const ProjectItem = styled.li`
  color: ${Colors.lightGrey};
  background-color: ${Colors.deepGrey};
  list-style: none;
  padding: 3rem;
  margin-bottom: 3rem;
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  ${MobileLikeFormat(`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

export const ProjectTitle = styled.h5`
  ${StyledTypography.darkHeading}
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${MobileLikeFormat(`
    white-space: normal;
  `)}
`;

export const ProjectLangBadge = styled.span`
  display: inline-block;
  background-color: ${Colors.darkGrey};
  padding: .75rem 1.25rem;
  border-radius: 1rem;
  font-family: ${titillium};
  font-size: 1.25rem;
  margin-left: 1rem;
  ${MobileLikeFormat(`
    margin-left: 0;
    padding: 1rem 1.25rem;
    margin-top: 2rem;
    font-size: 2rem;
  `)}
`;

export const ProjectBody = styled.div`
  margin: 3rem 0;
  font-family: ${butler.medium};
  font-size: 1.25rem;
  line-height: 160%;
  letter-spacing: .05rem;
  ${MobileLikeFormat(`
    font-size: 2.5rem;
  `)}
`;

export const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ProjectUpdateDate = styled.span`
  font-family: ${titillium};
  font-size: 1.25rem;
  ${MobileLikeFormat(`
    font-size: 2rem;
  `)}
`;

export const ProjectLinkToGH = styled.a`
  display: block;
  padding: .75rem 1.25rem;
  border: .1rem solid ${Colors.lightGrey};
  color: ${Colors.lightGrey};
  font-family: ${titillium};
  text-decoration: none;
  transition: 0.25s ease;
  &:hover {
    background-color: ${Colors.lightGrey};
    color: ${Colors.darkGrey};
  };
  ${MobileLikeFormat(`
    font-size: 2rem;
    padding: 2rem 2.5rem;
  `)}
`;
