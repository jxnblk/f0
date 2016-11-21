
import React from 'react'
import withScale from './withScale'
import Svg from './Svg'

const Area = ({
  points = [],
  color = 'currentcolor',
  opacity = 1,
  pad,
  padWidth,
  ...props
}) => {
  if (!points.length) return null

  const command = i => i === 0 ? 'M' : 'L'

  const d = [
    ...points
    .map(p => pad ? ({ ...p, x: p.padx }) : p)
    .map(({ x, y }, i) => (
      `${command(i)} ${x} ${y}`
    )),
    (pad ? `V100 H${points[0].padx} z` : `V100 H0 z`)
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

