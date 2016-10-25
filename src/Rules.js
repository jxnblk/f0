
import React from 'react'
import Svg from './Svg'
import Rule from './Rule'
import getScale from './get-scale'

const Rules = ({
  x = 0,
  y,
  pad,
  strokeWidth = 1,
  color,
  opacity,
  ...props
}) => {
  if (x < 1 && y < 1) return null

  const viewBox = [ 0, 0, 100, 100 ].join(' ')

  const { scale } = getScale({ length: x })
  const scalex = pad ? scale.padx : scale.x

  const xrules = Array.from({ length: x })
    .map((n, i) => i)
    .map(n => (
      <Rule
        key={n}
        x={scalex(n)}
        strokeWidth={strokeWidth}
        color={color}
        opacity={opacity}
      />
    ))

  const yrules = Array.from({ length: y })
    .map((n, i) => i)
    .map(n => {
      const step = n / (y - 1) * 100
      return (
        <Rule
          key={n}
          y={step}
          strokeWidth={strokeWidth}
          color={color}
          opacity={opacity}
        />
      )
    })

  return (
    <Svg {...props}>
      {xrules}
      {yrules}
    </Svg>
  )
}

export default Rules

