
import React from 'react'

const Group = ({
  width = '100%',
  height = 256,
  viewBox,
  style,
  ...props
}) => {
  viewBox = viewBox || [ 0, 0, 100, 100 ].join(' ')

  const sx = {
    display: 'block',
    margin: 0,
    width,
    height,
    overflow: 'visible',
    ...style
  }

  return (
    <svg
      {...props}
      viewBox={viewBox}
      preserveAspectRatio='none'
      style={sx}
    />
  )
}

export default Group

