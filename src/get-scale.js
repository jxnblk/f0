
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

  min = isNum(min) && min < datamin ? min : datamin || 0
  max = isNum(max) && max > datamax ? max : datamax || 100
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
    pad,
    padWidth
  }
}

export default getScale

