
import React from 'react'

const Dot = ({
  x = 0,
  y = 0,
  size = 12,
  color = 'currentcolor',
  fill,
  strokeWidth,
  style
}) => {
  return (
    <g style={style}>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + 1/32}
        fill='none'
        stroke={color}
        strokeWidth={size}
        strokeLinecap='round'
        vectorEffect='non-scaling-stroke'
      />
      {fill && (
        <line
          x1={x}
          y1={y}
          x2={x}
          y2={y + 1/32}
          fill='none'
          stroke={fill}
          strokeWidth={size - 2 * strokeWidth}
          strokeLinecap='round'
          vectorEffect='non-scaling-stroke'
        />
      )}
    </g>
  )
}

export default Dot

