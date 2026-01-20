import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const AlignRightIcon = React.forwardRef<Svg, IconProps>(
  ({ color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest }, ref) => {
    return (
      <Svg
        viewBox="0 0 32 32"
        fill="none"
        width={size}
        height={size}
        ref={ref}
        {...rest}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6667 13.3333L3.99999 13.3333L3.99999 8.00001L22.6667 8.00001L22.6667 13.3333Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6667 24L12 24L12 18.6667L22.6667 18.6667L22.6667 24Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M28 26.6667V5.33334"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </Svg>
    );
  }
);
