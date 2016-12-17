
import React from 'react'
import withScale from './withScale'
import Div from './Div'
import Label from './Label'

const DataLabels = ({
  scale,
  pad,
  points = [],
  min,
  max,
  format = n => n,
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
    }
  }

  const labels = points.map(({ x, pad, y, d }, i) => {
    const lx = pad.x - pad.width / 2
    const ly = y
    return (
      <Div key={i} x={lx} y={ly}
        top
        style={sx.div}>
        <Label
          style={sx.label}
          children={format(d)}
        />
      </Div>
    )
  })

  return (
    <div>
      {labels}
    </div>
  )
}

export default withScale(DataLabels)

