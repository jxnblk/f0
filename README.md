
# f0

Fully fluid responsive SVG charts for React

**WIP**

## Getting Started

```sh
npm i -S f0
```

```js
import React from 'react'
import { Line, Bars } from 'f0'

const App = () => {
  const dataA = [
    4, 8, 16, 32, 64
  ]

  const dataB = [
    8, 2, 32, 16, 4
  ]

  return (
    <div>
      <Bars data={dataA} />
      <Line data={dataB} />
    </div>
  )
}

export default App
```

## Features

- Fully fluid charts with fixed heights
- Bare bones API - only accepts flat arrays as data
- Uses HTML for labels to prevent scaling issues
- Low-level access to components for customization

## Components

### Line
### Bars
### Group
### Chart

## withScale HOC

## Browser Support

The fluid style for these charts relies on SVG 1.2 vector-effect non-scaling-stroke.
Modern evergreen browsers should support this feature, but charts may appear distorted in older browsers, including IE and Edge.


[MIT License](/LICENSE.md)

