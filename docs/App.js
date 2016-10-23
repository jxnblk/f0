
import React from 'react'
import Line from '../src/Line'
import Bars from '../src/Bars'

const data = [
  3,
  8,
  4,
  16,
  48,
  32,
  24
]

const blue = '#0077cc'
const orange = '#ff5500'
const colors = {
  blue,
  orange
}

class App extends React.Component {
  render () {
    const sx = {
      root: {
        fontFamily: 'sans-serif',
        padding: 32,
      }
    }
    return (
      <div style={sx.root}>
        <Bars
          min={0}
          data={data}
          />
        <Line data={data} px={4} py={8} />
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
        <pre>{data.join()}</pre>
      </div>
    )
  }
}

export default App

