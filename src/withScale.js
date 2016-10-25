
import React from 'react'
import getScale from './get-scale'

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

