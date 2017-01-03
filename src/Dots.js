
import React from 'react'
import withScale from './withScale'
import Svg from './Svg'
import Dot from './Dot'
import { padPoints } from './utils'

const Dots = ({
  scale,
  points,
  labels,
  pad,

  hoverPoint = {},
  mouse,

  color,
  size,
  fill,
  strokeWidth,
  hoverProps,
  ...rest
}) => {
  if (!points || !points.length) return null

  const paddedPoints = pad ? padPoints(points) : points

  return (
    <Svg {...rest}>
      {paddedPoints.map(({ x, y }, i) => {
        const hover = i === hoverPoint.index
          ? hoverProps : null
        return (
          <Dot
            key={i}
            x={x}
            y={y}
            size={size}
            color={color}
            fill={fill}
            strokeWidth={strokeWidth}
            {...hover}
          />
        )
      })}
    </Svg>
  )
}

export default withScale(Dots)

