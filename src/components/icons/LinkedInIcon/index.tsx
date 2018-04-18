import * as React from 'react';
import { SvgProps } from '../svgProps';

const LinkedInIcon: React.SFC<SvgProps> = ({ className }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' className={className}>
    <title>LinkedInIcon</title>
    <g>
      <path d='M30.67,0H1.33A1.33,1.33,0,0,0,0,1.33V30.67A1.33,1.33,0,0,0,1.33,32H30.67A1.33,1.33,0,0,0,32,
      30.67V1.33A1.33,1.33,0,0,0,30.67,0ZM9.49,27.27H4.74V12H9.49ZM7.12,9.91A2.75,2.75,0,1,1,9.87,7.16,2.75,
      2.75,0,0,1,7.12,9.91ZM27.27,27.27H22.52V19.84c0-1.77,0-4-2.47-4s-2.85,1.93-2.85,3.92v7.55H12.47V12H17v2.09h.07a5,
      5,0,0,1,4.49-2.47c4.81,0,5.69,3.16,5.69,7.27Z'/>
    </g>
  </svg>
);

export default LinkedInIcon;
