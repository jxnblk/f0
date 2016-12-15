
# f0

**WIP**

Minimal, composable, fully-fluid SVG charts for React

## Getting Started

```sh
npm i -S f0
```

```js
import React from 'react'
import { Line, Bars } from 'f0'

const App = () => {
  const a = [
    4, 8, 16, 32, 64
  ]

  const b = [
    8, 2, 32, 16, 4
  ]

  return (
    <div>
      <Bars data={a} />
      <Line data={b} />
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

```js
<Line
  data={data}
/>
```

```js
<Line
  data={data}
  color='tomato'
  strokeWidth={2}
  dots
/>
```

### Area

```js
<Area
  data={data}
/>
```

```js
<Area
  data={data}
  color='tomato'
  opacity={1/2}
/>
```

### Bar

```js
<Bar
  data={data}
  />
```

```js
<Bar
  data={data}
  color='tomato'
  />
```

### Svg

```js
<Svg>
  <Bar data={a} />
  <Line data={b} />
</Svg>
```

### Chart

```js
<Chart>
  <Line data={data} />
  <Axis
    labels={[
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri'
    ]}
  />
</Chart>
```

### Rules

```js
<Svg>
  <Rules y={5} />
  <Line data={data} />
</Svg>
```

### Axis

```js
<Chart>
  <Line data={data} />
  <Axis
    labels={[
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri'
    ]}
  />
  <Axis
    y
    labels={[
      32,
      16,
      0
    ]}
  />
</Chart>
```

### DataLabels

```js
<Chart>
  <Bar data={data} />
  <DataLabels data={data} />
</Chart>
```

## Browser Support

**Currently does not work in IE**

The fluid style for these charts relies on SVG 1.2 vector-effect non-scaling-stroke.
Modern evergreen browsers should support this feature, but charts may appear distorted in older browsers, including IE and Edge.

[MIT License](/LICENSE.md)

---

## Beta 5 Notes

```jsx
// Example Usage
<Chart
  data={data}
  min={0}
  format={formatData}
  niceCount={3}>
  <Rules x y />
  <Line />
  <Dots />
  <YAxis />
  <XAxis labels={labels.x} />
  <Tooltip />
</Chart>
```

```jsx
<Chart min={0}>
  <Rules y />
  <Bar data={data.a} />
  <Line data={data.b} />
</Chart>
```

