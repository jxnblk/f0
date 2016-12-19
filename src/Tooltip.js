
import React from 'react'
import Absolute from './Absolute'
import Label from './Label'

const Tooltip = ({
  scale,
  points,
  labels,

  hovering,
  mouse,
  style,
  ...props
}) => {
  if (!hovering) return null

  const index = Math.round(mouse.x * points.length - 1)
  const point = points[index]
  const { x, y } = point

  const sx = {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 8,
    borderRadius: 2,
    color: '#fff',
    backgroundColor: 'currentcolor',
    ...style
  }

  return (
    <Absolute
      top
      center
      x={x}
      y={y}>
      <div style={sx}>
        <Label>
          {point.d}
        </Label>
      </div>
    </Absolute>
  )
}

export default Tooltip

