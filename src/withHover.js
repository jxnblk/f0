
import React from 'react'

const withHover = (Component) => {
  class HoverComponent extends React.Component {
    constructor () {
      super()
      this.state = {
        x: null,
        y: null
      }
      this.handleMouseLeave = this.handleMouseLeave.bind(this)
      this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseLeave (e) {
      this.setState({
        x: null,
        y: null
      })
    }

    handleMouseMove (e) {
      const { offsetX, offsetY } = e.nativeEvent
      const { width, height } = this.root.getBoundingClientRect()
      const x = offsetX / width
      const y = offsetY / height

      this.setState({ x, y })
    }

    render () {
      const {
        hoverable,
        ...props
      } = this.props

      const {
        x,
        y
      } = this.state

      const { points = [] } = props
      const hoverIndex = x && Math.round(x * (points.length - 1))
      const hoverPoint = points[hoverIndex] || {}

      const hoverProps = hoverable ? {
        onMouseLeave: this.handleMouseLeave,
        onMouseMove: this.handleMouseMove,
        hoverPoint: {
          index: hoverIndex,
          ...hoverPoint
        },
        mouse: {
          x,
          y
        }
      } : {}

      return (
        <div ref={(ref) => { this.root = ref }}>
          <Component
            {...props}
            {...hoverProps}
          />
        </div>
      )
    }
  }

  return HoverComponent
}

export default withHover

