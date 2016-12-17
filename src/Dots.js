
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

  color,
  size,
  fill,
  strokeWidth,
  ...rest
}) => {
  const paddedPoints = pad ? padPoints(points) : points

  return (
    <Svg {...rest}>
      {paddedPoints.map(({ x, y }, i) => (
        <Dot
          key={i}
          x={x}
          y={y}
          size={size}
          color={color}
          fill={fill}
          strokeWidth={strokeWidth}
        />
      ))}
    </Svg>
  )
}

export default withScale(Dots)

