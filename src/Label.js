
import React from 'react'
import Div from './Div'

const Label = ({
  style,
  ...props
}) => {
  const sx = {
    fontSize: 12,
    height: 16,
    lineHeight: '16px',
    ...style
  }

  return (
    <Div {...props} style={sx} />
  )
}

export default Label

