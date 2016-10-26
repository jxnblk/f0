
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
  children,
  ...rest
}) => {
  if (!points.length) return null

  const command = i => i === 0 ? 'M' : 'L'

  // Remove after removing Dots
  const p = points.map(p => pad ? ({ ...p, x: p.padx }) : p)

  const d = points.map(({ x, padx, y }, i) => {
    const lx = pad ? padx : x
    return `${command(i)} ${lx} ${y}`
  })

  return (
    <Svg {...rest}>
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

