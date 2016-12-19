
import React from 'react'
import Absolute from './Absolute'
import Label from './Label'

const Tooltip = ({
  scale,
  points,
  labels,

  hoverPoint,
  mouse,
  pad,

  style,
  format = (n) => n,
  ...props
}) => {
  if (mouse.x === null) return null

  const { x, y } = hoverPoint
  const padX = hoverPoint.pad && hoverPoint.pad.x
  const paddedX = pad ? padX : x

  const sx = {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 8,
    borderRadius: 2,
    color: '#fff',
    backgroundColor: '#000',
    ...style
  }

  const label = format(hoverPoint.d)

  return (
    <Absolute
      top
      center
      x={paddedX}
      y={y}>
      <div
        className='Tooltip'
        style={sx}>
        <Label>
          {label}
        </Label>
      </div>
    </Absolute>
  )
}

export default Tooltip

