
# f0

**WIP**

Fully fluid responsive SVG charts for React

Minimal, composable, fully-fluid SVG graphs for React

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
- Uses HTML for labels to prevent scaling issues
- Bare bones API - only accepts flat arrays as data
- Low-level access to components for composition

## Components

### Line
### Area
### Bar

### Svg
### Chart

### Rules
### Axis
### DataLabels

## withScale HOC
## getScale

## Browser Support

The fluid style for these charts relies on SVG 1.2 vector-effect non-scaling-stroke.
Modern evergreen browsers should support this feature, but charts may appear distorted in older browsers, including IE and Edge.


[MIT License](/LICENSE.md)

