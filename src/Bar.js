
import React from 'react'
import withScale from './withScale'
import Svg from './Svg'

const Bar = ({
  scale,
  points,
  labels,
  pad,

  hoverPoint,
  mouse,

  hoverStyle,
  color = 'currentcolor',
  style,
  ...rest
}) => {
  if (!points.length) return null

  const bars = points.map(({ pad, y, d }, i) => {
    const bx = pad.x - pad.width / 2
    const hi = d === 0
      ? 0
      : d > 0 ? 100 - y : y
    const by = d >= 0 ? y : 0

    return (
      <rect
        key={i}
        x={bx}
        y={by}
        width={pad.width}
        height={hi}
      />
    )
  })

  const sx = {
    position: 'relative',
    ...style
  }

  return (
    <Svg
      {...rest}
      fill={color}
      style={sx}
      children={bars}
    />
  )
}

export default withScale(Bar)

