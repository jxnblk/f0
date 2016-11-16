
import React from 'react'
import getScale from './get-scale'

const withScale = Comp => {
  const ScaledComp = ({
    data = [],
    viewBox,
    ...props
  }) => {
    viewBox = viewBox || [ 0, 0, 100, 100 ].join(' ')

    const {
      min,
      max,
      scale,
      padWidth
    } = getScale({ data, ...props })

    const points = data
      .map((d, i) => {
        if (d === null) {
          return null
        }
        return {
          d,
          x: scale.x(i),
          padx: scale.padx(i),
          y: scale.y(d)
        }
      })
      .filter(p => p !== null)

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

