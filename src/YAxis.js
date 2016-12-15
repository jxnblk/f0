
import React from 'react'
import Label from './Label'
import Div from './Div' // Rename to Absolute
import withScale from './withScale'

const YAxis = ({
  scale,
  points,
  labels, // Update old labels prop
  pad,

  rule,
  format = (n) => n,
  style,
  ...rest
}) => {
  const yLabels = getLabels(labels)

  const sx = {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      borderLeft: rule ? '1px solid' : null
    },
    label: {
      paddingLeft: rule ? 4 : null,
      marginTop: -18
    }
  }

  return (
    <div style={sx.root}>
      {yLabels.map((label, i) => {
        const y = i / (yLabels.length - 1) * 100
        return (
          <Div
            key={i}
            y={y}>
            <Label
              style={sx.label}
              children={format(label)} />
          </Div>
        )
      })}
    </div>
  )
}

const getLabels = (labels) => {
  return Array.isArray(labels)
    ? labels
    : typeof labels === 'object'
    ? labels.y || []
    : []
}

export default YAxis

