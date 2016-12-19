
import React from 'react'
import { compose } from 'recompose'
import withScale from './withScale'
import withHover from './withHover'

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

  hovering,
  mouse,

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
    height,
    hovering,
    mouse
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

const enhance = compose(
  withScale,
  withHover
)

export default enhance(Chart)

