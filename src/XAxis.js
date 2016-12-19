
import React from 'react'
import Label from './Label'
import withScale from './withScale'

const XAxis = ({
  scale,
  points,
  labels,
  pad,

  hoverPoint,
  mouse,

  rule,
  format = (n) => n,
  style,
  ...rest
}) => {
  const xLabels = getLabels(labels)

  const labelWidth = scale
    ? scale.pad.width + '%'
    : (100 / xLabels.length) + '%'

  const sx = {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'relative',
      minHeight: 32,
      borderTop: rule ? '1px solid' : null,
      marginTop: rule ? -1 : null,
      ...style
    },
    label: {
      textAlign: 'center',
      flexBasis: labelWidth,
      paddingTop: 8,
      paddingBottom: 8,

      // outline: '1px solid tomato'
    }
  }

  return (
    <div style={sx.root}>
      {xLabels.map((label, i) => (
        <Label
          key={i}
          style={sx.label}
          children={format(label)}
        />
      ))}
    </div>
  )
}

const getLabels = (labels) => {
  return Array.isArray(labels)
    ? labels
    : typeof labels === 'object'
    ? labels.x || []
    : []
}

export default withScale(XAxis)

