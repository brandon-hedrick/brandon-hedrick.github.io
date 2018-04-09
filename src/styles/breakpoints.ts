import styled from 'styled-components';

export const breakpoints = {
  mobile: 1024,
};

export const MobileLikeFormat = (styles: string) => `
@media screen and (orientation: portrait) {
  ${styles}
}
@media screen and (max-width: ${breakpoints.mobile - 1}px) {
  ${styles}
}`;
