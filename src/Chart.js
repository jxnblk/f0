
import React from 'react'
import withScale from './withScale'

const Chart = ({
  width = '100%',
  height = 256,
  style,
  children,
  pad,
  niceCount,

  scale,
  points,
  labels,

  ...props
}) => {
  const sx = {
    position: 'relative',
    width,
    height,
    ...style
  }

  const clonedChildren = cloneChildren(children, {
    scale,
    points,
    labels,
    pad,
    height
  })

  return (
    <div
      {...props}
      style={sx}
      children={clonedChildren}
    />
  )
}

const cloneChildren = (children, props) => {
  return React.Children.map(children, (child) => {
    const subChildren = child.props && child.props.children && typeof child.props.children !== 'string'
      ? cloneChildren(child.props.children, props)
      : child.props.children

    return React.cloneElement(child, {
      ...props,
      ...child.props,
      children: subChildren
    })
  })
}

export default withScale(Chart)

