import { Colors } from './colors';
import styled from 'styled-components';
import { ComponentType } from 'react';

const butler = {
  black: 'butlerblack',
  medium: 'butlermedium'
}

const titillium = 'titilliumbold_upright'

export const StyledTypography: any = {};

StyledTypography.logoTitle = `
  font-family: ${titillium};
  color: ${Colors.deepGrey};
  font-size: 2.25rem;
`

StyledTypography.headerNav = `
  font-family: ${titillium}}};
  color: ${Colors.deepGrey}}};
  font-size: 1.5rem
`

StyledTypography.pageTitle = `
  font-family: ${butler.black}}};
  color: ${Colors.lightGrey}}};
  font-size: 10rem;
`

StyledTypography.pageSubtitle = `
  font-family: ${titillium}}};
  color: ${Colors.mediumGrey}}};
  font-size: 3.5rem;
`

StyledTypography.paragraph = `
  font-family: ${butler.medium}};
  color: ${Colors.darkGrey}};
  font-size: 1.5rem;
  line-height: 150%;
`

StyledTypography.darkTitle = `
  font-family: ${butler.black};
  color: ${Colors.mediumGrey};
  font-size: 3.75rem;
  line-height: 100%;
`

StyledTypography.darkHeading = `
  font-family: ${titillium};
  color: ${Colors.lightGrey};
  font-size: 3rem;
  letter-spacing: .15rem;
`