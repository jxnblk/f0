
import React from 'react'
import withScale from './withScale'
import Svg from './Svg'
import Dots from './Dots'

const isNum = n => !isNaN(n)

const Line = ({
  scale,
  points = [],
  min,
  max,
  pad,
  padWidth,

  color = 'currentcolor',
  strokeWidth = 3,
  strokeLinecap = 'round',

  // Should this be an object?
  dots,
  dotSize,
  dotColor,
  dotFill,
  style = {},
  ...props
}) => {
  if (!points.length) return null

  const command = i => i === 0 ? 'M' : 'L'

  const p = points.map(p => pad ? ({ ...p, x: p.padx }) : p)
  const d = p.map(({ x, y }, i) => (
    `${command(i)} ${x} ${y}`
  ))

  return (
    <Svg {...props}>
      <path
        d={d}
        fill='none'
        vectorEffect='non-scaling-stroke'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
      />
      {dots && (
        <Dots
          points={p}
          size={dotSize}
          color={dotColor || color}
          fill={dotFill}
          strokeWidth={strokeWidth}
        />
      )}
    </Svg>
  )
}

export default withScale(Line)

