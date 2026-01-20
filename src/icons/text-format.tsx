import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { IconProps } from '../types';

export const TextFormatIcon = React.forwardRef<Svg, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <Svg
        fill="none"
        viewBox="0 0 20 20"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <G           stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          clipPath="url(#clip0_239_7411)"
        >
          <Path
            d="M9.164 4.998h8.337M13.33 15.002V4.998M5.768 15.002v-6.67M2.906 8.332h5.836"
            vectorEffect="non-scaling-stroke"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_239_7411">
            <Path
              fill="#fff"
              d="M0 0H20V20H0z"
              vectorEffect="non-scaling-stroke"
            />
          </ClipPath>
        </Defs>
      </Svg>
    );
  }
);
