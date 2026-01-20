import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const MinusIcon = React.forwardRef<Svg, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.8, ...rest
  }, ref) => {
    return (
      <Svg
        viewBox="0 0 32 32"
        fill="none"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <Path
          d="M24 16H8"
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
