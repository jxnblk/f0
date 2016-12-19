
import React from 'react'
import withScale from './withScale'
import Svg from './Svg'
import { padPoints } from './utils'

const isNum = n => !isNaN(n)

const Line = ({
  scale,
  points = [],
  labels,

  hoverPoint,
  mouse,

  color = 'currentcolor',
  strokeWidth = 3,
  strokeLinecap = 'round',

  pad,
  style,
  children,
  ...rest
}) => {
  if (!points.length) return null

  const command = i => i === 0 ? 'M' : 'L'

  const paddedPoints = pad ? padPoints(points) : points

  const d = paddedPoints.map(({ x, y }, i) => {
    return `${command(i)} ${x} ${y}`
  })

  const sx = {
    root: {
      position: 'relative',
      ...style
    }
  }

  return (
    <Svg {...rest} style={sx.root}>
      <path
        d={d}
        fill='none'
        vectorEffect='non-scaling-stroke'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
      />
    </Svg>
  )
}

export default withScale(Line)

