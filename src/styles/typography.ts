import styled from 'styled-components';

import { Colors } from './colors';
import { MobileLikeFormat } from './breakpoints';

export const butler = {
  black: 'butlerblack',
  medium: 'butlermedium',
};

export const titillium = 'titilliumbold_upright';

export const StyledTypography: any = {};

StyledTypography.logoTitle = `
  font-family: ${titillium};
  color: ${Colors.deepGrey};
  font-size: 2.25rem;
  ${MobileLikeFormat(
    `font-size: 4.5rem;`,
  )}
`;

StyledTypography.headerNav = `
  font-family: ${titillium}}};
  color: ${Colors.deepGrey}}};
  font-size: 1.5rem
`;

StyledTypography.pageTitle = `
  font-family: ${butler.black}}};
  color: ${Colors.lightGrey}}};
  font-size: 10rem;
  ${MobileLikeFormat(
    `color: ${Colors.deepGrey};
    font-size: 8rem;`,
  )}
`;

StyledTypography.pageSubtitle = `
  font-family: ${titillium}}};
  color: ${Colors.mediumGrey}}};
  font-size: 3rem;
  ${MobileLikeFormat(
    `font-size: 4rem;`,
  )}
`;

StyledTypography.paragraph = `
  font-family: ${butler.medium}};
  color: ${Colors.darkGrey}};
  font-size: 1.5rem;
  line-height: 150%;
  ${MobileLikeFormat(
    `font-size: 2.5rem;`,
  )}
`;

StyledTypography.darkTitle = `
  font-family: ${butler.black};
  color: ${Colors.mediumGrey};
  font-size: 3.75rem;
  line-height: 100%;
  ${MobileLikeFormat(
    `font-size: 5rem;`,
  )}
`;

StyledTypography.darkHeading = `
  font-family: ${titillium};
  color: ${Colors.lightGrey};
  font-size: 3rem;
  letter-spacing: .15rem;
  ${MobileLikeFormat(
    `font-size: 4rem;`,
  )}
`;
