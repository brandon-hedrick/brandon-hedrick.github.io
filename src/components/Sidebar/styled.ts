import styled from 'styled-components';

import TwitterIcon from '../icons/TwitterIcon';
import GithubIcon from '../icons/GitHubIcon';

import LinkedInIcon from '../icons/LinkedInIcon';
import { Colors } from '../../styles/colors';
import { StyledTypography } from '../../styles/typography';
import { MobileLikeFormat } from '../../styles/breakpoints';

// icon styling
const svgStyling = `
  fill: ${Colors.grey};
  width: 2rem;
  transition: fill 0.25s ease
  &:hover {
    fill: ${Colors.mediumGrey};
  }
`;

export const StyledTwitterIcon = styled(TwitterIcon)`${svgStyling}`;
export const StyleLinkedInIcon = styled(LinkedInIcon)`${svgStyling}`;
export const StyledGithubIcon = styled(GithubIcon)`${svgStyling}`;

export const SideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8.25rem 2.5rem 3rem;
  ${MobileLikeFormat(`
    display: none;
  `)}
`;

export const SideBarSocialWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100%;
  &:before {
    content: '';
    width: .125em;
    min-height: 7.25rem;
    background-color: ${Colors.grey};
  }
  &:after {
    height: 100%;
    content: '';
    width: .125em;
    background-color: ${Colors.grey};
  }
`;

export const SideBarSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.8rem 0;
  min-height: 15.5rem;
`;
