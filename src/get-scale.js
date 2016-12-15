
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

const getScale = ({
  data,
  length,         // Optional length
  min,            // optional min value
  max,            // optional max value
  padRatio = 2,   // Ratio of bar width vs margin
  niceCount,      // Count argument for D3 nice function
}) => {
  if (!data) return null

  const [ dataMin, dataMax ] = extent(data)

  min = getMin(min, dataMin)
  max = getMax(max, dataMax)
  length = length || data.length

  const denominator = length * (padRatio + 1)
  const pad = 1 / denominator * 100
  const padWidth = padRatio / denominator * 100

  const xdomain = ([ 0, length - 1 ])
  const x = scaleLinear()
    .domain(xdomain)
    .range([ 0, 100 ])

  const padx = scaleLinear()
    .domain(xdomain)
    .range([ padWidth / 2, 100 - padWidth / 2 ])

  const ydomain = ([ min, max ])
  const y = scaleLinear()
    .domain(ydomain)
    .range([ 100, 0 ])

  if (niceCount) {
    y.nice(niceCount)
  }

  const scale = {
    x,
    y,
    pad: {
      x: padx,
      width: padWidth
    }
  }

  const points = data.map((d, i) => {
    return {
      d,
      x: scale.x(i),
      y: scale.y(d),
      pad: {
        x: scale.pad.x(i),
        width: padWidth
      }
    }
  })

  // To do:
  const labels = {
    x: ['hello', 'hi' ],
    y: []
  }

  return {
    scale,
    points,
    labels
  }
}

const isNum = n => !isNaN(n)

const getMin = (propMin, dataMin) => {
  return isNum(propMin) && propMin <= dataMin
    ? propMin
    : dataMin || 0
}

const getMax = (propMax, dataMax) => {
  return isNum(propMax) && propMax >= dataMax
    ? propMax
    : dataMax || 100
}

export default getScale

