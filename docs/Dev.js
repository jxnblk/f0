
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

  Axis,
  DataLabels,

  XAxis,
  Label,

  Labels
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
            <Chart style={{ marginBottom: 32 }}>
              <Group>
                <Line
                  style={sx.bars}
                  color={colors[1]}
                  data={logo}
                  min={0}
                  max={16}
                />
                <Rules x={8} y={5} />
              </Group>
            </Chart>
            <Chart style={{
              backgroundColor: '#f6f6f6'
            }}>
              <Axis y
                labels={[
                  16,
                  12,
                  8,
                  4,
                  0
                ]} />
              <Group>
                <Rules y={5} />
                <Bar
                  style={sx.bars}
                  color={colors[2]}
                  data={data}
                  min={0}
                  max={16}
                />
              </Group>
              <DataLabels
                data={data}
                min={0}
                max={16}
                format={fl}
              />
            </Chart>
            <Axis rule
              labels={[
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H'
              ]} />
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
