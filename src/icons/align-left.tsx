import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const AlignLeftIcon = React.forwardRef<Svg, IconProps>(
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
          d="M9.33334 18.6667H28V24H9.33334V18.6667Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.33334 8H20V13.3333H9.33334V8Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M4 5.33334V26.6667"
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
