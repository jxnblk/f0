
import React from 'react'
import { scaleLinear } from 'd3-scale'
import {
  min as d3min,
  max as d3max
} from 'd3-array'

const isNum = n => !isNaN(n)

const withScale = Comp => {
  const ScaledComp = ({
    data = [],
    min,
    max,
    px = 0,
    py = 0,
    ratio = 2,
    ...props
  }) => {
    const w = 100 + 2 * px
    const h = 100 + 2 * py

    const viewBox = [ 0, 0, w, h ].join(' ')

    const datamin = d3min(data)
    const datamax = d3max(data)

    min = isNum(min) && min < datamin? min : datamin
    max = isNum(max) && max > datamax ? max : datamax

    const x = scaleLinear()
      .domain([ 0, data.length - 1 ])
      .range([ 0 + px, 100 + px ])

    const y = scaleLinear()
      .domain([ min, max ])
      .range([ 100 + py, 0 + py ])

    const scale = { x, y }

    const points = data.map((d, i) => {
      return {
        x: x(i),
        y: y(d)
      }
    })

    // Bar scale
    const len = data.length
    const den = len * (ratio + 1)
    const pad = 1 / den * 100
    const barWidth = ratio / den * 100

    const barScale = {
      x: scaleLinear()
        .domain([ 0, len - 1 ])
        .range([ 0 + px, 100 + px - barWidth ]),
      y
    }

    const barPoints = data.map((d, i) => {
      return {
        d,
        x: barScale.x(i),
        y: barScale.y(d)
      }
    })

    return (
      <Comp
        {...props}
        data={data}
        px={px}
        py={py}
        viewBox={viewBox}
        min={min}
        max={max}
        scale={scale}
        points={points}
        barScale={barScale}
        barWidth={barWidth}
        barPoints={barPoints}
      />
    )
  }

  return ScaledComp
}

export default withScale

