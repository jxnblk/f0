
import React from 'react'
import chroma from 'chroma-js'
import {
  Chart,
  Group,
  Line,
  Bars,
  Rule,
  Rules,
  Div,
  Label,
  Labels,
} from '../src'
import Header from './Header'
import BarDemo from './BarDemo'
import DoubleBars from './DoubleBars'
import BarsLine from './BarsLine'
import Area from './Area'

const blue = '#0077cc'
const orange = '#ff5500'
const colors = {
  blue,
  orange
}

// Pattern buffer
// Dematerialization margin

const rand = n => Math.round(16 * Math.random())

const getColors = () => {
  const [ h, s ] = chroma.random().hsl()
  const b0 = chroma.hsl([ h, s, 1 / 8 ]).hex()
  const b1 = chroma.hsl([ h, s, 1 / 4 ]).hex()
  const b2 = chroma.hsl([ h, s, 1 / 2 ]).hex()
  const b3 = chroma.hsl([ h, s, 3 / 4 ]).hex()
  const b4 = chroma.hsl([ h, s, 7 / 8 ]).hex()

  return [
    b0, b1, b2, b3, b4
  ]
}

class App extends React.Component {
  state = {
    count: 0,
    colors: getColors(),
    logo: [
      0, 16, 0, 16, 0, 16, 0, 16
    ],
    data: [
      3, 8, 4, 16,
      48, 32, 24, 24
    ],
    neg: [
      -48, -32, -24, -24,
      -3, -8, -4, -16
    ]
  }

  randomize = () => {
    const logo = this.state.logo.map(rand)
    const data = this.state.data.map(rand)
    const neg = this.state.data.map(rand).map(n => -1 * n)
    const colors = getColors()
    this.setState({
      logo,
      data,
      neg,
      colors
    })
  }

  componentDidMount () {
    setInterval(this.randomize, 2000)
  }

  render () {
    const { data } = this.state
    const sx = {
      root: {
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      }
    }

    return (
      <div style={sx.root}>
        <Header {...this.state} />
        <BarDemo {...this.state} />
        <DoubleBars {...this.state} />
        <BarsLine {...this.state} />
        <Area {...this.state} />
      </div>
    )
  }
}

export default App

