
import React from 'react'
import withScale from './withScale'
import withHover from './withHover'

const Hoverable = ({
  hovering,
  x,
  y,
  datum,
  active,
  ...props
}) => {
  const sx = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }

  // Change to child function props

  return (
    <div
      {...props}
      style={sx}
      children={`x: ${x}\ny: ${y} ${hovering ? '\nhovering' : ''} ${active ? 'active' : ''}`} />
  )
}

export default withScale(withHover(Hoverable))

