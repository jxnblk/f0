
import React from 'react'
import getScale from './get-scale'
import Div from './Div'
import Label from './Label'

// Split up or handle unpadded labels

const XAxis = ({
  labels = [],
  rule,
  scale,
  padWidth,
  style,
  color
}) => {
  const sx = {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'relative',
      minHeight: 24,
      marginTop: rule ? -1 : null,
      borderTop: rule ? '1px solid' : null,
      color: color,
      ...style
    },
    label: {
      textAlign: 'center',
      flexBasis: padWidth + '%',
      paddingTop: 4,
      paddingBottom: 4,
    }
  }

  return (
    <div style={sx.root}>
      {labels.map((label, i) => {
        const x = scale.padx(i)
        return (
          <Label
            key={i}
            style={sx.label}
            children={label}
          />
        )
      })}
    </div>
  )
}

const YAxis = ({
  labels = [],
  rule,
  style,
  color,
}) => {
  const sx = {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      borderLeft: rule ? '1px solid' : null,
      color: color,
      ...style
    },
    label: {
      paddingLeft: rule ? 8 : null
    }
  }
  return (
    <div style={sx.root}>
      {labels.map((label, i) => (
        <Div
          key={i}
          y={i / (labels.length - 1) * 100 - 20}>
          <Label
            style={sx.label}
            children={label} />
        </Div>
      ))}
    </div>
  )
}

const Axis = ({
  labels = [],
  length,
  x,
  y,
  ...props
}) => {
  const { scale, padWidth } = getScale({ length: length || labels.length })

  if (y) {
    return (
      <YAxis
        {...props}
        labels={labels}
      />
    )
  }

  return (
    <XAxis
      {...props}
      scale={scale}
      padWidth={padWidth}
      labels={labels}
    />
  )
}

export default Axis

