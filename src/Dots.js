
import React from 'react'
import Svg from './Svg'
import Dot from './Dot'

const Dots = ({
  points = [],
  pad,
  color,
  size,
  fill,
  strokeWidth,
  style,
  ...rest
}) => {
  const sx = {
    root: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...style
    }
  }

  const paddedPoints = points.map(p => pad
    ? ({ ...p, x: p.pad.x })
    : p)

  return (
    <Svg {...rest} style={sx.root}>
      {paddedPoints.map(({ x, y }, i) => (
        <Dot
          key={i}
          x={x}
          y={y}
          size={size}
          color={color}
          fill={fill}
          strokeWidth={strokeWidth}
          style={style}
        />
      ))}
    </Svg>
  )
}

export default Dots

