import { Colors } from './colors';

const butler = {
  black: 'butlerblack',
  medium: 'butlermedium'
}

const titillium = 'titilliumbold_upright'

const logoTitle = {
  fontFamily: titillium,
  color: Colors.deepGrey,
  fontSize: '2.25rem'
}

const headerNav = {
  fontFamily: titillium,
  color: Colors.deepGrey,
  fontSize: '1.5rem'
}

const pageTitle = {
  fontFamily: butler.black,
  color: Colors.lightGrey,
  fontSize: '10rem'
}

const pageSubtitle = {
  fontFamily: titillium,
  color: Colors.mediumGrey,
  fontSize: '3.75rem'
}

const paragraph = {
  fontFamily: butler.medium,
  color: Colors.darkGrey,
  fontSize: '1.5rem',
  lineHeight: '150%',
}

export const TypeStyles = {
  logoTitle,
  headerNav,
  pageTitle,
  pageSubtitle,
  paragraph,
}