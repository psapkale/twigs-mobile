import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const TextAlignCenterIcon = React.forwardRef<Svg, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <Svg
        viewBox="0 0 16 16"
        fill="none"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M2.664 3h10.667M4 6.333h8M2.664 9.667h10.667M5.336 13h5.333"
          vectorEffect="non-scaling-stroke"
        />
      </Svg>
    );
  }
);
