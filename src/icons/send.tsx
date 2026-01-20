import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const SendMessageIcon = React.forwardRef<Svg, IconProps>(
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
          d="M11.672 16.1987L14.0333 26.824C14.328 28.148 16.0867 28.4334 16.784 27.2707L27.7826 8.93869C28.384 7.93869 27.664 6.66669 26.4973 6.66669H5.76265C4.42532 6.66669 3.75599 8.28269 4.70132 9.22802L11.672 16.1987Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M27.7867 7.41333L11.6667 16.2"
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
