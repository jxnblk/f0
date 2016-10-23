
import React from 'react'

const Div = ({
  x = 0,
  y = 0,
  style,
  center,
  ...props
}) => {
  const sx = {
    position: 'absolute',
    top: y + '%',
    left: x + '%',
    transform: center ? 'translateX(-50%)' : null,
    ...style
  }

  return (
    <div
      {...props}
      style={sx}
    />
  )
}

export default Div

