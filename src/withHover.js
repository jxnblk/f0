
import React from 'react'

const withHover = (Component) => {
  class HoverComponent extends React.Component {
    constructor () {
      super()
      this.state = {
        hovering: false,
        x: null,
        y: null,
      }
      this.handleMouseEnter = this.handleMouseEnter.bind(this)
      this.handleMouseLeave = this.handleMouseLeave.bind(this)
      this.handleMouseMove = this.handleMouseMove.bind(this)
      // this.getBoundingRect = this.getBoundingRect.bind(this)
    }

    componentDidMount () {
      // this.getBoundingRect()
    }

    // getBoundingRect () {
    //   const root = this.root
    //   const { width, height } = root.getBoundingClientRect()
    //   // this.setState({ width, height })
    //   return { width, height }
    // }

    handleMouseEnter (e) {
      this.setState({
        hovering: true
      })
    }

    handleMouseLeave (e) {
      this.setState({
        hovering: false,
        x: null,
        y: null
      })
    }

    handleMouseMove (e) {
      const { offsetX, offsetY } = e.nativeEvent
      const { width, height } = e.target.getBoundingClientRect()
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
        hovering,
        x,
        y
      } = this.state

      const hoverProps = hoverable ? {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onMouseMove: this.handleMouseMove,
        hovering,
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

