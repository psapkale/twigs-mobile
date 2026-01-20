import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { IconProps } from '../types';

export const CloseCircleIcon = React.forwardRef<Svg, IconProps>(
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
        <G clipPath="url(#clip0_125_1922)">
          <Path
            d="M19.7733 12.2267L12.2267 19.7733"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M19.7733 19.7733L12.2267 12.2267"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M16 28C9.372 28 4 22.628 4 16C4 9.372 9.372 4 16 4C22.628 4 28 9.372 28 16C28 22.628 22.628 28 16 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_125_1922">
            <Rect width="32" height="32" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  }
);
