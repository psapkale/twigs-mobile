import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const AdjustHorizontalIcon = React.forwardRef<Svg, IconProps>(
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
          d="M5.33334 13.3333H12"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M18.6667 13.3333H26.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M5.33334 18.6667H9.33334"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M16 18.6667H26.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M15.3333 16C16.8061 16 18 14.8061 18 13.3333C18 11.8606 16.8061 10.6667 15.3333 10.6667C13.8606 10.6667 12.6667 11.8606 12.6667 13.3333C12.6667 14.8061 13.8606 16 15.3333 16Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M12.6667 21.3333C14.1394 21.3333 15.3333 20.1394 15.3333 18.6667C15.3333 17.1939 14.1394 16 12.6667 16C11.1939 16 10 17.1939 10 18.6667C10 20.1394 11.1939 21.3333 12.6667 21.3333Z"
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
