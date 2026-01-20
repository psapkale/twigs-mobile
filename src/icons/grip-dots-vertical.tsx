import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { IconProps } from '../types';

export const GripDotsVerticalIcon = React.forwardRef<Svg, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <Svg
        width={size}
        height={size}
        ref={ref}
        viewBox="0 0 32 32"
        fill="none"
        {...rest}
      >
        <Rect
          x="11.0829"
          y="8.5"
          width="3.71077"
          height="3.71077"
          rx="1.85538"
          fill={color}
        />
        <Rect
          x="17.268"
          y="8.5"
          width="3.71077"
          height="3.71077"
          rx="1.85538"
          fill={color}
        />
        <Rect
          x="11.0829"
          y="14.6847"
          width="3.71077"
          height="3.71077"
          rx="1.85538"
          fill={color}
        />
        <Rect
          x="17.268"
          y="14.6848"
          width="3.71077"
          height="3.71077"
          rx="1.85538"
          fill={color}
        />
        <Rect
          x="11.0829"
          y="20.8692"
          width="3.71077"
          height="3.71077"
          rx="1.85538"
          fill={color}
        />
        <Rect
          x="17.268"
          y="20.8691"
          width="3.71077"
          height="3.71077"
          rx="1.85538"
          fill={color}
        />
      </Svg>
    );
  }
);
