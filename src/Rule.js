
import React from 'react'

const isNum = n => n !== null && !isNaN(n)

const Rule = ({
  x,
  y,
  strokeWidth = 1,
  color = 'currentcolor',
  opacity = 1 / 4
}) => {
  if (!isNum(x) && !isNum(y)) return null

  const d = isNum(x)
    ? `M${x} 0 V100`
    : `M0 ${y} H100`

  return (
    <path
      d={d}
      fill='none'
      stroke={color}
      strokeWidth={strokeWidth}
      opacity={opacity}
      vectorEffect='non-scaling-stroke'
    />
  )
}

export default Rule

