import { Colors } from './colors';
import styled from 'styled-components';
import { ComponentType } from 'react';

export const Typography: any = {};

const butler = {
  black: 'butlerblack',
  medium: 'butlermedium'
}

const titillium = 'titilliumbold_upright'

Typography.logoTitle = {
  fontFamily: titillium,
  color: Colors.deepGrey,
  fontSize: '2.25rem'
}

Typography.headerNav = {
  fontFamily: titillium,
  color: Colors.deepGrey,
  fontSize: '1.5rem'
}

Typography.pageTitle = {
  fontFamily: butler.black,
  color: Colors.lightGrey,
  fontSize: '10rem'
}

Typography.pageSubtitle = {
  fontFamily: titillium,
  color: Colors.mediumGrey,
  fontSize: '3.75rem'
}

Typography.paragraph = {
  fontFamily: butler.medium,
  color: Colors.darkGrey,
  fontSize: '1.5rem',
  lineHeight: '150%',
}

Typography.darkTitle = {
  fontFamily: butler.black,
  color: Colors.mediumGrey,
  fontSize: '3.75rem',
  lineHeight: '100%'
}

Typography.darkHeading = {
  fontFamily: titillium,
  color: Colors.lightGrey,
  fontSize: '3rem',
  letterSpacing: '.15rem'
}

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
  font-size: 3.75rem;
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