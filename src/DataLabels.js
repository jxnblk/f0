
import React from 'react'
import withScale from './withScale'
import Absolute from './Absolute'
import Label from './Label'

const DataLabels = ({
  scale,
  pad,
  points = [],

  hoverPoint,
  mouse,

  // Do these get passed through?
  min,
  max,
  format = n => n,
  style,
  ...props
}) => {
  const sx = {
    root: {},
    div: {
      width: scale.pad.width + '%'
    },
    label: {
      width: '100%',
      textAlign: 'center',
      ...style
    }
  }

  const labels = points.map(({ x, pad, y, d }, i) => {
    const lx = pad.x - pad.width / 2
    const ly = y
    return (
      <Absolute key={i} x={lx} y={ly}
        top
        style={sx.div}>
        <Label
          style={sx.label}
          children={format(d)}
        />
      </Absolute>
    )
  })

  return (
    <div>
      {labels}
    </div>
  )
}

export default withScale(DataLabels)

