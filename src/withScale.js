
import React from 'react'
import { scaleLinear } from 'd3-scale'
import {
  min as d3min,
  max as d3max
} from 'd3-array'

const isNum = n => !isNaN(n)

const getScale = ({
  data = [],
  length,         // Optional length
  min,            // optional min value
  max,            // optional max value
  padRatio = 2,   // Ratio of bar width vs margin
}) => {
  const datamin = d3min(data)
  const datamax = d3max(data)

  min = isNum(min) && min < datamin ? min : datamin
  max = isNum(max) && max < datamax ? max : datamax
  length = length || data.length

  const denominator = length * (padRatio + 1)
  const pad = 1 / denominator * 100
  const padWidth = padRatio / denominator * 100

  const xdomain = ([ 0, length - 1 ])
  const ydomain = ([ min, max ])
  const x = scaleLinear().domain(xdomain).range([ 0, 100 ])
  const padx = scaleLinear().domain(xdomain).range([ padWidth / 2, 100 - padWidth / 2 ])
  const y = scaleLinear().domain(ydomain).range([ 100, 0 ])

  const scale = { x, padx, y }

  return {
    min,
    max,
    scale,
    padWidth
  }
}

const withScale = Comp => {
  const ScaledComp = ({
    data = [],
    viewBox,
    ...props
  }) => {
    const w = 100
    const h = 100

    viewBox = viewBox || [ 0, 0, w, h ].join(' ')

    const {
      min,
      max,
      scale,
      padWidth
    } = getScale({ data, ...props })

    const points = data.map((d, i) => {
      return {
        d,
        x: scale.x(i),
        padx: scale.padx(i),
        y: scale.y(d)
      }
    })

    return (
      <Comp
        {...props}
        data={data}
        viewBox={viewBox}
        min={min}
        max={max}
        scale={scale}
        points={points}
        padWidth={padWidth}
      />
    )
  }

  return ScaledComp
}

export default withScale

