import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const EnterIcon = React.forwardRef<Svg, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.2, ...rest
  }, ref) => {
    return (
      <Svg
        viewBox="0 0 33 32"
        fill="none"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <Path
          d="M25.3 8.02262V15.2757C25.3 17.2801 23.6863 18.9039 21.6955 18.9039H6.61526"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M11.7111 24L6.61522 18.9042L11.7111 13.8083"
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
