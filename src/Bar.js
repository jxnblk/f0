
// Rename to Bar

import React from 'react'
import withScale from './withScale'
import Svg from './Svg'

const Bar = ({
  scale,
  padWidth,
  points = [],
  color = 'currentcolor',
  active,
  activeStyle,
  ...props
}) => {
  if (!points.length) return null

  const bars = points.map(({ padx, y, d }, i) => {
    const bx = padx - padWidth / 2
    const hi = d === 0
      ? 0
      : d > 0 ? 100 - y : y
    const by = d >= 0 ? y : 0

    const style = i === active ? activeStyle || {
      fill: 'black',
    } : null

    return (
      <rect
        key={i}
        x={bx}
        y={by}
        width={padWidth}
        height={hi}
        vectorEffect='non-scaling-stroke'
        style={style}
      />
    )
  })

  return (
    <Svg
      {...props}
      fill={color}
      children={bars}
    />
  )
}

export default withScale(Bar)

