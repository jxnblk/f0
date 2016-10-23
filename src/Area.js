
import React from 'react'

const Area = ({
  d,
  points = [],
  fill = 'currentcolor',
  opacity = 1,
  ymin = 100,
  xmin = 0,
  style
}) => {
  if (points.length ) return null

  const command = i => i === 0 ? 'M' : 'L'

  d = d || [
    ...points.map(({ x, y }, i) => (
      `${command(i)} ${x} ${y}`
    )),
    `V${ymin} H${xmin} z`
  ]

  return (
    <path
      d={d}
      fill={fill}
      opacity={opacity}
      style={style}
    />
  )
}

export default Area

