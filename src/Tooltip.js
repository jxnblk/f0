
import React from 'react'
import Div from './Div'

const Tooltip = ({
  scale,
  points,
  labels,

  hovering,
  mouse,
  ...props
}) => {
  if (!hovering) return null

  const index = Math.round(mouse.x * points.length - 1)
  const point = points[index]
  const { x, y } = point

  return (
    <Div
      x={x}
      y={y}>
      <pre>{point.d}</pre>
    </Div>
  )
}

export default Tooltip

