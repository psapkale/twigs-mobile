import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconProps } from '../types';

export const AlertIcon = React.forwardRef<Svg, IconProps>(
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
          d="M16 17.4933V12.5067"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M18.7053 5.51867L28.9173 23.3907C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3907L13.2947 5.51867C14.4907 3.424 17.5093 3.424 18.7053 5.51867Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Circle cx="16" cy="21.3333" r="1.33333" fill={color} />
      </Svg>
    );
  }
);
