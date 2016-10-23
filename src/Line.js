
import React from 'react'
import withScale from './withScale'
import Dots from './Dots'
import Area from './Area'

const isNum = n => !isNaN(n)

const Line = ({
  data = [],
  viewBox,
  scale,
  points = [],
  min,
  max,
  width = '100%',
  height = 256,
  px = 0,
  py = 0,
  color = 'currentcolor',
  strokeWidth = 3,
  strokeLinecap = 'round',
  area,
  areaOpacity = 1,
  dots,
  dotSize,
  dotColor,
  dotFill,
  style = {}
}) => {
  if (!points.length) return null

  const { x, y } = scale

  const command = i => i === 0 ? 'M' : 'L'

  const d = points.map(({ x, y }, i) => (
    `${command(i)} ${x} ${y}`
  ))

  const areaFill = typeof area === 'string' ? area : 'currentcolor'

  const sx = {
    root: {
      display: 'block',
      margin: 0,
      width,
      height,
      overflow: 'visible',
      ...style
    },
    area: {
      ...style.area
    },
    dot: {
      ...style.dot
    }
  }

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio='none'
      style={sx.root}>
      {area && (
        <Area
          points={points}
          xmin={x(0)}
          ymin={y(min)}
          fill={areaFill}
          opacity={areaOpacity}
          style={sx.area}
        />
      )}
      <path
        d={d}
        fill='none'
        vectorEffect='non-scaling-stroke'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
      />
      {dots && (
        <Dots
          points={points}
          size={dotSize}
          color={dotColor || color}
          fill={dotFill}
          strokeWidth={strokeWidth}
          style={sx.dot}
        />
      )}
    </svg>
  )
}

export default withScale(Line)

