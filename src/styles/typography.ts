import { Colors } from './colors';

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