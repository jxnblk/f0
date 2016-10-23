
import React from 'react'
import { linearScale } from 'd3-scale'
import Label from './Label'

const Labels = ({
  x = [],
  y = [],
  px = 0,
  py = 0,
  center,
  length,
}) => {
  const w = 100 + 2 * px
  const h = 100 + 2 * px

  const xLabels = x.map((label, i) =>  {
    const len = length || x.length
    const step = i / (len - 1) * (100)
    return (
      <Label
        key={i}
        x={step}
        y={100}
        center={center}
        children={label}
      />
    )
  })

  const yLabels = y.map((label, i) => {
    const len = length || y.length
    const step = i / (len - 1) * 100
    return (
      <Label
        key={i}
        y={step}
        children={label}
      />
    )
  })

  return (
    <div>
      {xLabels}
      {yLabels}
    </div>
  )
}

export default Labels

