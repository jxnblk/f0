
import React from 'react'

const withHover = Comp => {
  class HoverComp extends React.Component {
    state = {
      hovering: false,
      x: null,
      y: null,
      active: null,
      datum: null
    }

    onMouseEnter = e => {
      this.setState({
        hovering: true
      })
    }

    onMouseMove = e => {
      const { offsetX, offsetY } = e.nativeEvent
      const { scale, padWidth } = this.props
      const active = scale && scale.padx ?
        1 : null
      this.setState({
        x: offsetX,
        y: offsetY,
        active
      })
    }

    onMouseLeave = e => {
      this.setState({
        hovering: false,
        active: null
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

