import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const ExportIcon = React.forwardRef<Svg, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <Svg
        viewBox="0 0 32 32"
        fill="none"
        width={size}
        height={size}
        {...rest}
        ref={ref}
      >
        <Path
          d="M26.6666 26H5.33331"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M16 5.0013V18.668"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <Path
          d="M22.6666 11.668L15.9986 4.99997L9.33197 11.668"
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
