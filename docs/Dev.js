
import React from 'react'
import {
  VictoryAnimation,
  VictoryAxis
} from 'victory'
import {
  Chart,
  Group,
  Line,
  Area,
  Bar,
  Rules,
  Dots,

  XAxis,
  YAxis,
  DataLabels,
} from '../src'
import { fl } from './util'

const Dev = ({
  data,
  neg,
  logo,
  colors
}) => {
  const sx = {
    root: {
      padding: 48
    },
    bars: {
      marginBottom: 32,
      transitionProperty: 'fill, stroke',
      transitionDuration: '.4s',
      transitionTimingFunction: 'ease-out'
    }
  }

  return (
    <div style={sx.root}>
      <pre>Dev</pre>
      <VictoryAnimation
        duration={750}
        data={{
          data,
          neg,
          logo
        }}>
        {({ data, logo }) => (
          <div>
            <Chart
              data={logo}
              niceCount={3}
              min={0}
            >
              <Group>
                <Area
                  color={colors[3]}
                  opacity={1/2}
                />
                <Line color={colors[1]} />
                <Dots
                  fill='white'
                  strokeWidth={3}
                  color={colors[1]} />
              </Group>
              <Rules />
              <XAxis />
              <YAxis />
            </Chart>
            <Bar
              data={logo}
              min={0}
              max={16}
            />
            <Line
              data={logo}
              min={0}
              max={16}
            />
            <Area
              data={logo}
              min={0}
              max={16}
            />

            <Chart style={{
              marginTop: 64,
              backgroundColor: '#f6f6f6'
            }}>
              <Bar
                style={sx.bars}
                color={colors[2]}
                data={data}
                min={0}
                max={16}
              />
              <YAxis
                labels={[
                  16,
                  12,
                  8,
                  4,
                  0
                ]} />
              <Rules y={5} />
              <DataLabels
                data={data}
                min={0}
                max={16}
                format={fl}
              />
            </Chart>

            <Area
              style={sx.bars}
              color={colors[1]}
              data={logo}
              min={0}
              max={16}
            />
          </div>
        )}
      </VictoryAnimation>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(neg, null, 2)}</pre>
      <pre>{JSON.stringify(logo, null, 2)}</pre>
      <pre>{JSON.stringify(colors, null, 2)}</pre>
    </div>
  )
}

export default Dev
