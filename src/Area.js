
import React from 'react'
import withScale from './withScale'
import Svg from './Svg'

const Area = ({
  points = [],
  color = 'currentcolor',
  opacity = 1,
  padWidth,
  ...props
}) => {
  if (!points.length) return null

  const command = i => i === 0 ? 'M' : 'L'

  const d = [
    ...points.map(({ x, y }, i) => (
      `${command(i)} ${x} ${y}`
    )),
    `V100 H0 z`
  ]

  return (
    <Svg {...props}>
      <path
        d={d}
        fill={color}
        opacity={opacity}
      />
    </Svg>
  )
}

export default withScale(Area)

