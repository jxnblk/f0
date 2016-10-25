
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Chart,
  Group,
  Line
} from '../src'
import { fl } from './util'

const Area = ({
  data,
  logo,
  colors
}) => {
  const sx = {
    root: {
      color: colors[4],
      backgroundColor: colors[1],
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
              <div>Area</div>
              <div style={sx.space} />
              <div>
                <div className='h5 right-align'>Pattern buffer</div>
                <div>{fl(data[data.length - 1])}</div>
              </div>
            </h2>
            <Chart>
              <Group>
                <Line
                  data={logo}
                  min={0}
                  max={16}
                  color={colors[0]}
                  area={colors[0]}
                  areaOpacity={1}
                />
                <Line
                  data={data}
                  min={0}
                  max={16}
                  color={colors[3]}
                  area={colors[3]}
                  areaOpacity={1/2}
                />
              </Group>
            </Chart>
          </div>
        )}
      </VictoryAnimation>
    </section>
  )
}

export default Area

