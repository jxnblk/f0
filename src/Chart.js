
import React from 'react'

const Chart = ({
  width = '100%',
  height = 256,
  style,
  ...props
}) => {
  const sx = {
    position: 'relative',
    width,
    height,
    ...style
  }

  return (
    <div
      {...props}
      style={sx} />
  )
}

export default Chart

