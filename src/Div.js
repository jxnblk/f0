
import React from 'react'

const Div = ({
  x = 0,
  y = 0,
  top,
  style,
  center,
  ...props
}) => {
  const transform = center && top
    ? 'translate(-50%, -100%)'
    : center
    ? 'translate(-50%, 0)'
    : top
    ? 'translate(0, -100%)'
    : null

  const sx = {
    position: 'absolute',
    top: y + '%',
    left: x + '%',
    transform,
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

