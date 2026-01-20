import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { IconProps } from '../types';

export const OrderedListIcon = React.forwardRef<Svg, IconProps>(
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
        <G           stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          clipPath="url(#clip0_103_16449)"
        >
          <Path
            strokeWidth={strokeWidth}
            d="M10.75 7.783h8.333M19.083 12.417H10.75M10.75 17.05h8.333"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M7.833 9.917H5.75h1.042V5.75L5.75 6.792M5.75 14.917h2.083v1.666l-2.083 1.25v1.25h2.292"
            vectorEffect="non-scaling-stroke"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_103_16449">
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
