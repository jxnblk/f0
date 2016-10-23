
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
  const isXAxis = x > 1
  const length = x > 1 ? x : y
  const min = isXAxis ? px : py

  const rules = Array.from({ length: length })
    .map((n, i) => i)
    .map(n => {
      const step = n / (length - 1) * 100 + min
      return (
        <Rule
          key={n}
          x={x ? step : undefined}
          y={y ? step : undefined}
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
      {rules}
    </svg>
  )
}

export default Rules

