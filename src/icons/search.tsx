import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const SearchIcon = React.forwardRef<Svg, IconProps>(
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
          d="M18.9242 7.44249C22.0333 10.5516 22.0333 15.5924 18.9242 18.7015C15.8151 21.8106 10.7742 21.8106 7.66513 18.7015C4.55604 15.5924 4.55604 10.5516 7.66513 7.44249C10.7742 4.3334 15.8151 4.3334 18.9242 7.44249"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M18.8666 18.7467L26.6666 26.6533"
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
