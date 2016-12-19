
import React from 'react'
import withScale from './withScale'
import Svg from './Svg'
import { padPoints } from './utils'

const Area = ({
  scale,
  points = [],
  labels,

  hoverPoint,
  mouse,

  color = 'currentcolor',
  opacity = 1,
  pad,
  ...rest
}) => {
  if (!points.length) return null

  const command = i => i === 0 ? 'M' : 'L'

  const paddedPoints = pad ? padPoints(points) : points

  const d = [
    ...paddedPoints.map(({ x, y }, i) => (
      `${command(i)} ${x} ${y}`
    )),
    `V100 H${paddedPoints[0].x} z`
  ]

  return (
    <Svg {...rest}>
      <path
        d={d}
        fill={color}
        opacity={opacity}
      />
    </Svg>
  )
}

export default withScale(Area)

