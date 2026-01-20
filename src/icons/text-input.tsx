import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { IconProps } from '../types';

export const TextInputIcon = React.forwardRef<Svg, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <Svg
        width={size}
        height={size}
        ref={ref}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
      >
        <G clipPath="url(#clip0_10368_72714)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 16H4C3.448 16 3 15.552 3 15V9C3 8.448 3.448 8 4 8H20C20.552 8 21 8.448 21 9V15C21 15.552 20.552 16 20 16Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M11 20H10C8.895 20 8 19.105 8 18C8 19.105 7.105 20 6 20H5"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M8 6V18"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M5 4H6C7.105 4 8 4.895 8 6C8 4.895 8.895 4 10 4H11"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_10368_72714">
            <Rect width="24" height="24" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  }
);
