import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconProps } from '../types';

export const InfoPlusIcon = React.forwardRef<Svg, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <Svg
        width={size}
        height={size}
        ref={ref}
        viewBox="0 0 32 32"
        fill="none"
        {...rest}
      >
        <Path
          d="M18.6481 4.3786C17.7965 4.18535 16.9101 4.08331 16 4.08331C9.41859 4.08331 4.08331 9.41859 4.08331 16C4.08331 22.5814 9.41859 27.9166 16 27.9166C22.5814 27.9166 27.9166 22.5814 27.9166 16C27.9166 15.0345 27.8018 14.0958 27.5851 13.1969"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M14.9167 20.3333H17.0834"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M16 20.3334V14.9167H14.9167"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Circle cx="16" cy="11.6666" r="1.08333" fill={color} />
        <Path
          d="M25.6667 3V8.33333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M23 5.66669H28.3333"
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
