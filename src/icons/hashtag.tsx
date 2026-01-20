import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { IconProps } from '../types';

export const HashtagIcon = React.forwardRef<Svg, IconProps>(
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
        <G clipPath="url(#clip0_1503_4523)">
          <Path
            d="M7.56537 11.5638H12.1523L12.913 7"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M25.8274 11.5638H21.1523L21.9129 7"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M21.1523 11.5638L19.6751 20.4362H10.6751L12.1523 11.5638H21.1523Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M6 20.4362H10.6751L9.91446 25"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M24.2621 20.4362H19.6751L18.9145 25"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1503_4523">
            <Rect width="32" height="32" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  }
);
