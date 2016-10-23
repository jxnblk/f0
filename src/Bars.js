
import React from 'react'
import withScale from './withScale'

const Bars = ({
  viewBox,
  barScale,
  barWidth,
  barPoints = [],
  min,
  max,
  width = '100%',
  height = 256,
  px = 0,
  py = 0,
  color = 'currentcolor',
  style,
  ...props
}) => {
  if (!barPoints.length) return null

  const bars = barPoints.map(({ x, y, d }, i) => {
    const hi = d >= 0 ? 100 - y + py : y + py
    const by = d >= 0 ? y : 0 + py
    return (
      <rect
        key={i}
        x={x}
        y={by}
        width={barWidth}
        height={hi}
      />
    )
  })

  const sx = {
    root: {
      display: 'block',
      margin: 0,
      width,
      height,
      ...style
    }
  }

  return (
    <svg
      {...props}
      viewBox={viewBox}
      preserveAspectRatio='none'
      fill={color}
      style={sx.root}>
      {bars}
    </svg>
  )
}

export default withScale(Bars)

