import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { IconProps } from '../types';

export const UnderlineIcon = React.forwardRef<Svg, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <Svg
        viewBox="0 0 24 24"
        fill="none"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <G clipPath="url(#clip0_103_16446)">
          <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            d="M16.167 5.333v5.834a4.167 4.167 0 01-8.334 0V5.333M7 18.667h10H7z"
            vectorEffect="non-scaling-stroke"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_103_16446">
            <Path
              fill="#fff"
              d="M0 0H20V20H0z"
              transform="translate(2 2)"
              vectorEffect="non-scaling-stroke"
            />
          </ClipPath>
        </Defs>
      </Svg>
    );
  }
);
