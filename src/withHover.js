
import React from 'react'

const withHover = Comp => {
  class HoverComp extends React.Component {
    state = {
      hovering: false,
      x: null,
      y: null,
      datum: null
    }

    onMouseEnter = e => {
      this.setState({
        hovering: true
      })
    }

    onMouseMove = e => {
      const { offsetX, offsetY } = e.nativeEvent
      this.setState({
        x: offsetX,
        y: offsetY,
      })
    }

    onMouseLeave = e => {
      this.setState({
        hovering: false
      })
    }

    render () {
      // const {
      //    data,
      //    min,
      //    max,
      //    scale,
      //    points,
      //    padWidth
      // } = this.props
      // console.log('hover', this.state)

      return <Comp
        {...this.props}
        {...this.state}
        onMouseEnter={this.onMouseEnter}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
      />
    }
  }

  return HoverComp
}

export default withHover

