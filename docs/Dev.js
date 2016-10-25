
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
  Labels
} from '../src'

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
            <Group>
              <Bar
                style={sx.bars}
                color={colors[2]}
                data={data}
                min={0}
                max={16}
              />
              <Rules x={8} y={5} />
            </Group>
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
