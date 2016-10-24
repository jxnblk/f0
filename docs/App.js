
import React from 'react'
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

const blue = '#0077cc'
const orange = '#ff5500'
const colors = {
  blue,
  orange
}

const rand = n => Math.round(16 * Math.random())

class App extends React.Component {
  state = {
    count: 0,
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
    this.setState({
      logo,
      data,
      neg
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

        {/*
        <div>
          <Bars
            min={0}
            data={data}
            />
          <Line data={data} py={8} />
          <Chart style={{ marginBottom: 48 }}>
            <Group style={{ backgroundColor: '#eee' }}>
              <Rules y={4} />
              <Bars
                data={data}
                min={0}
                color={blue} />
              <Line
                data={data}
                min={0}
                dots
                withBars
                color={orange} />
              <Rules x={data.length} />
            </Group>
            <Labels
              center
              px={8}
              x={[
              'One',
              'Two',
              'Three',
              'Four',
              'Five',
              'Six',
              'Seven',
            ]} />
          </Chart>
          <hr />
          <Group style={{ backgroundColor: '#eee' }}>
            <Rules y={5} />
            <Rules x={data.length} px={8} />
            <Bars
              data={data}
              min={0}
              height={128}
              px={8}
              viewBox='0 0 100 200'
              color={blue} />
            <Bars
              data={data.map(d => d * -1)}
              max={0}
              height={128}
              px={8}
              viewBox='0 0 100 200'
              y={50}
              color='#444' />
            <Line
              data={data}
              withBars
              px={8}
              dots
              color={orange} />
          </Group>
          <Line
            dots
            data={data} />
          <Line
            dots
            dotSize={12}
            data={data} />
          <Line
            dots
            dotSize={12}
            dotFill='white'
            data={data} />
          <Line
            strokeWidth={5}
            dots
            dotSize={16}
            dotFill='white'
            data={data} />
          <div style={{
            color: '#fff',
            backgroundColor: blue
          }}>
            <Line
              color='#fff'
              dots
              dotSize={12}
              dotColor={orange}
              dotFill={blue}
              area='black'
              areaOpacity={.25}
              data={data} />
          </div>
          <div style={{
            color: '#fff',
            backgroundColor: orange
          }}>
            <Line
              color='#fff'
              data={data}
              px={0}
              py={0}
              dots
              dotSize={12}
              area={blue}
              areaOpacity={.25}
            />
          </div>
        </div>
        */}
      </div>
    )
  }
}

export default App

