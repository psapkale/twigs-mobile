# twigs-mobile

React Native icon package - Mobile companion to twigs-react-icons

## Installation

```bash
npm install twigs-mobile react-native-svg
```

## Usage

```tsx
import { AddColumnIcon, AlertIcon, SearchIcon } from 'twigs-mobile';

function MyComponent() {
  return (
    <>
      <AddColumnIcon size={24} color="#000" strokeWidth={1.5} />
      <AlertIcon size={32} color="#ff0000" />
      <SearchIcon size={20} />
    </>
  );
}
```

## Props

All icons accept the following props:

- `size?: number` - Icon size (default: 32)
- `color?: string` - Icon color (default: 'currentColor')
- `strokeWidth?: number` - Stroke width (default: 1.5)
- All other props from `react-native-svg`'s `SvgProps`

## License

MIT
