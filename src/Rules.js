
import React from 'react'
import Svg from './Svg'
import Rule from './Rule'
import withScale from './withScale'
import { createArray } from './utils'

const Rules = ({
  x = 0,
  y,
  pad,
  style,

  scale,
  points,
  labels,

  ...rest
}) => {
  if (x < 1 && y < 1) return null

  x = x === true
    ? points.length || 0
    : x

  const xRules = createArray(x)
    .map(n => (
      <Rule
        {...rest}
        key={n}
        x={scale.x(n)}
      />
    ))

  // To do:
  // y = y || labels.y.length || 0

  const yRules = createArray(y)
    .map(n => {
      const step = n / (y - 1) * 100
      return (
        <Rule
          {...rest}
          key={n}
          y={step}
        />
      )
    })

  const sx = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...style
  }

  return (
    <Svg {...rest} style={sx}>
      {xRules}
      {yRules}
    </Svg>
  )
}

export default withScale(Rules)

