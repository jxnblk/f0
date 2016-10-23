
import React from 'react'
import Dot from './Dot'

const Dots = ({
  points = [],
  color,
  size,
  fill,
  strokeWidth,
  style
}) => {
  return (
    <g>
      {points.map(({ x, y }, i) => (
        <Dot
          key={i}
          x={x}
          y={y}
          size={size}
          color={color}
          fill={fill}
          strokeWidth={strokeWidth}
          style={style}
        />
      ))}
    </g>
  )
}

export default Dots

