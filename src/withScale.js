
import React from 'react'
import getScale from './get-scale'

const withScale = Comp => {
  const ScaledComp = ({
    data,
    ...props
  }) => {
    const scaleProps = getScale({ data, ...props })

    return (
      <Comp
        {...props}
        {...scaleProps}
      />
    )
  }

  return ScaledComp
}

export default withScale

