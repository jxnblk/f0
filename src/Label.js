
import React from 'react'

const Label = ({
  style,
  ...props
}) => {
  const sx = {
    fontSize: 12,
    minHeight: 16,
    ...style
  }

  return (
    <div {...props} style={sx} />
  )
}

export default Label

