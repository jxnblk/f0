
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Chart,
  Group,
  Bar,
  Line,
  Dots,
  Rules,
  XAxis,
  YAxis,
  Tooltip
} from '../src'
import { fl } from './util'

const HoverDemo = ({
  data,
  logo,
  colors
}) => {
  const sx = {
    root: {
      color: colors[4],
      backgroundColor: colors[0],
      transitionProperty: 'color, background-color, fill',
      transitionDuration: '.2s, .8s',
      transitionTimingFunction: 'ease-out'
    },
    title: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    },
    space: {
      flex: '1 1 auto'
    },
    tooltip: {
      fontWeight: 'bold',
      color: colors[2],
      backgroundColor: 'transparent'
    }
  }

  const props = {
    barHover: {
      fill: colors[2]
    }
  }

  return (
    <section
      className='pl3 pr3 pt6 pb6'
      style={sx.root}>
      <VictoryAnimation
        duration={750}
        data={{ data, logo }}>
        {({ data, logo }) => (
          <div>
            <h2 className='h1 xh0 mt0 mb3 mono' style={sx.title}>
              <div>Hover</div>
              <div style={sx.space} />
              <div>
                <div className='h5 right-align'>Dematerialization</div>
                <div>{fl(data[data.length - 1])}</div>
              </div>
            </h2>
            <Chart
              data={data}
              min={0}
              max={16}
              pad
              hoverable>
              <Rules y={3} color={colors[1]} />
              <Group>
                <Bar
                  hoverProps={props.barHover}
                />
              </Group>
              <YAxis color='white' labels={[16, 8, 0]} />
              <Tooltip
                format={fl}
                style={sx.tooltip}
              />
            </Chart>
          </div>
        )}
      </VictoryAnimation>
    </section>
  )
}

export default HoverDemo

