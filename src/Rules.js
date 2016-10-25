
import React from 'react'
import Rule from './Rule'

const Rules = ({
  x = 0,
  y,
  width = '100%',
  height = 256,
  px = 0,
  py = 0,
  strokeWidth = 1,
  color,
  opacity,
  style
}) => {
  if (x < 1 && y < 1) return null

  const w = 100 + 2 * px
  const h = 100 + 2 * py
  const viewBox = [ 0, 0, w, h ].join(' ')
  // const isXAxis = x > 1
  // const length = x > 1 ? x : y
  // const min = isXAxis ? px : py

  const xrules = Array.from({ length: x })
    .map((n, i) => i)
    .map(n => {
      const step = n / (x - 1) * 100 + px
      return (
        <Rule
          key={n}
          x={step}
          strokeWidth={strokeWidth}
          color={color}
          opacity={opacity}
        />
      )
    })

  const yrules = Array.from({ length: y })
    .map((n, i) => i)
    .map(n => {
      const step = n / (y - 1) * 100 + py
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

  const sx = {
    display: 'block',
    margin: 0,
    width,
    height,
    overflow: 'visible',
    ...style
  }

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio='none'
      style={sx}>
      {xrules}
      {yrules}
    </svg>
  )
}

export default Rules

