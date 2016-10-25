
import React from 'react'

const Svg = ({
  viewBox = '0 0 100 100',
  width = '100%',
  height = 256,
  style,
  ...props
}) => {
  const sx = {
    display: 'block',
    margin: 0,
    overflow: 'visible',
    width,
    height,
    ...style
  }

  return (
    <svg
      {...props}
      preserveAspectRatio='none'
      viewBox={viewBox}
      style={sx}
    />
  )
}

export default Svg

