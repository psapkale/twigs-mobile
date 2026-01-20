import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { IconProps } from '../types';

export const CommentPlusIcon = React.forwardRef<Svg, IconProps>(
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
        <G clipPath="url(#clip0_622_4114)">
          <Path
            d="M13.3333 14H18.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            d="M16 16.6667V11.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 24L13.0778 27.8569C12.8771 28.0142 12.6042 28.0431 12.3748 27.9315C12.1455 27.8199 12 27.5872 12 27.3321V24H10.6667C6.98477 24 4 21.0152 4 17.3333V10.6667C4 6.98477 6.98477 4 10.6667 4H21.3333C25.0152 4 28 6.98477 28 10.6667V17.3333C28 21.0152 25.0152 24 21.3333 24H18Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_622_4114">
            <Rect width="32" height="32" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  }
);
