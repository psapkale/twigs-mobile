import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const ChevronUpFillIcon = React.forwardRef<Svg, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <Svg
        viewBox="0 0 32 32"
        fill="none"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <Path
          d="M15.5736 9.43087C15.8084 9.19363 16.1916 9.19363 16.4264 9.43087L25.3807 18.4779C25.7557 18.8568 25.4873 19.5 24.9543 19.5L7.04573 19.5C6.51268 19.5 6.24431 18.8568 6.61928 18.4779L15.5736 9.43087Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
      </Svg>
    );
  }
);
