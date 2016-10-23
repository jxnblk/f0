
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
  const data = [
    4, 8, 16, 32, 64
  ]

  return (
    <div>
      <Line data={data} />
      <Bars data={data} />
    </div>
  )
}

export default App
```

## Components

### Line
### Bars
### Group
### Chart

## withScale HOC

## Features

- Fully fluid charts with fixed heights
- Bare bones API - only accepts flat arrays as data
- Uses HTML for labels to prevent scaling issues
- Low-level access to components for customization

## Browser Support

The fluid style for these charts relies on SVG 1.2 vector-effect non-scaling-stroke.
Modern evergreen browsers should support this feature, but charts may appear distorted in older browsers, including IE and Edge.

---

## To do:
- [x] Line area
- [x] Chart container
- [x] Group (Svg)
- [x] withScale HOC
- [x] Bars
- [x] Rules
- [x] Rule
- [ ] Div/Box component
- [ ] AxisLabels
- [ ] Label

- [ ] Tooltip
- [ ] theme context
- [ ] ThemeProvider
- [ ] React motion example

---

withScale HOC ideas
- input
  - data
  - length
- provides
  - viewBox
  - px, py
  - min, max
  - scale
  - points
  - padScale (bar charts)
  - padPoints
  - padWidth

