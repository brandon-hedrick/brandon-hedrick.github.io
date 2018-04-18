import * as React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { Colors } from '../../styles/colors';

interface HamburgerMenuProps {
  clickHandler?: any;
  open?: boolean;
}

const HamburgerMenu: React.SFC<HamburgerMenuProps> = ({ clickHandler , open }) => (
  <HamburgerButton onClick={clickHandler}>
    <FirstStripe open={open}></FirstStripe>
    <MiddleStrip open={open}></MiddleStrip>
    <BottomStripe open={open}></BottomStripe>
  </HamburgerButton>
);

export default HamburgerMenu;

const HamburgerButton = styled.button`
  position: relative;
  height: 32px;
  width: 32px;
  border:none;
  background-color: transparent;
  @media (min-width: ${breakpoints.mobile + 1}px ) {
    height: 42px;
    width: 48px;
  };
`;

interface HBStripeProps {
  className ?: string;
  open ?: boolean;
}

const HBStripe: React.SFC<HBStripeProps> = ({className}) => (
  <span className={className}></span>
);

const StyledHBStripe = styled(HBStripe)`
  height: 2px;
  background-color: ${Colors.mediumGrey};
  display: block;
  position: absolute;
  left: 4px;
  right: 4px;
  @media (min-width: ${breakpoints.mobile + 1}px ) {
    height: 4px;
  };
`;

const FirstStripe = StyledHBStripe.extend`
  ${(props: HBStripeProps) =>
    props.open
    ?
      `
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
      `
    : `top: 8px;`
  }
`;

const BottomStripe = StyledHBStripe.extend`
  ${(props: HBStripeProps) =>
    props.open
    ?
      `
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      `
    : `bottom: 8px;`
  }
`;

const MiddleStrip = StyledHBStripe.extend`
  top: 50%;
  transform: translateY(-50%);
  display: ${(props: HBStripeProps) => props.open ? 'none' : 'block'}
`;
