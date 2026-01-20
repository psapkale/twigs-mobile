import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const BlockIcon = React.forwardRef<Svg, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
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
          d="M24.4853 7.51466L7.51468 24.4853L24.4853 7.51466V7.51466Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M16 4C9.372 4 4 9.372 4 16C4 22.628 9.372 28 16 28C22.628 28 28 22.628 28 16C28 9.372 22.628 4 16 4Z"
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
