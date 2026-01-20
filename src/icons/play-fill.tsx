import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const PlayFillIcon = React.forwardRef<Svg, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
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
          d="M16 3.25C8.95779 3.25 3.25 8.95779 3.25 16C3.25 23.0422 8.95779 28.75 16 28.75C23.0422 28.75 28.75 23.0422 28.75 16C28.75 8.95779 23.0422 3.25 16 3.25Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M14.588 12.0773L19.764 15.1386C20.4187 15.5253 20.4187 16.4733 19.764 16.86L14.588 19.9213C13.9213 20.316 13.0787 19.8346 13.0787 19.06V12.9386C13.0787 12.164 13.9213 11.6826 14.588 12.0773Z"
          fill="white"
          vectorEffect="non-scaling-stroke"
        />
      </Svg>
    );
  }
);
