import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../types';

export const AlertFillIcon = React.forwardRef<Svg, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <Svg
        viewBox="0 0 32 32"
        fill="none"
        width={size}
        height={size}
        ref={ref}
        {...rest}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2947 5.51867C14.4907 3.424 17.5093 3.424 18.7053 5.51867L28.9173 23.3907C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3907L13.2947 5.51867ZM16 11.5067C16.5523 11.5067 17 11.959 17 12.5067V17.4933C17 18.041 16.5523 18.4933 16 18.4933C15.4477 18.4933 15 18.041 15 17.4933V12.5067C15 11.959 15.4477 11.5067 16 11.5067ZM16 22.6667C16.7364 22.6667 17.3333 22.0697 17.3333 21.3333C17.3333 20.597 16.7364 20 16 20C15.2636 20 14.6667 20.597 14.6667 21.3333C14.6667 22.0697 15.2636 22.6667 16 22.6667Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
      </Svg>
    );
  }
);
