
# f0

**WIP**

Minimal, composable, fully-fluid SVG charts for React

## Getting Started

```sh
npm i -S f0
```

```jsx
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

```jsx
<Line
  data={data}
/>
```

```jsx
<Line
  data={data}
  color='tomato'
  strokeWidth={2}
/>
```

### Area

```jsx
<Area
  data={data}
/>
```

```jsx
<Area
  data={data}
  color='tomato'
  opacity={1/2}
/>
```

### Bar

```jsx
<Bar
  data={data}
  />
```

```jsx
<Bar
  data={data}
  color='tomato'
  />
```

### Dots

```jsx
<Dots
  data={data}
  color='tomato'
  strokeWidth={2}
  size={12}
  fill
/>
```

### Group

```jsx
<Group>
  <Bar data={a} />
  <Line data={b} />
</Group>
```

### Chart

```jsx
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

```jsx
<Chart data={data}>
  <Group>
    <Line />
    <Dots />
  </Group>
</Chart>
```

### Rules

```jsx
<Chart>
  <Rules y={5} />
  <Line data={data} />
</Chart>
```

### XAxis

```jsx
<Chart>
  <Line data={data} />
  <XAxis
    labels={[
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri'
    ]}
  />
  <YAxis
    labels={[
      32,
      16,
      0
    ]}
  />
</Chart>
```

### Tooltip

```jsx
<Chart data={data} hoverable>
  <Bar />
  <Tooltip />
</Chart>
```

### DataLabels

```jsx
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

## beta 5 to do:

- [ ] Support hoverable prop on Bar, Line, Area, & Dots
- [ ] Support children in Bar, Line, Area, & Dots
- [ ] Write basic tests

