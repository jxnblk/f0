import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Chart,
  Group,
  Bar,
  Dots,
  Rules,
  XAxis
} from '../src'
import { fl } from './util'

const BarDemo = ({
  data,
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
        data={{ data }}>
        {({ data }) => (
          <div>
            <h2 className='h1 xh0 mt0 mb3 mono' style={sx.title}>
              <div>Bar</div>
              <div style={sx.space} />
              <div>
                <div className='h5 right-align'>Telemetry</div>
                <div>{fl(data[data.length - 1])}</div>
              </div>
            </h2>
            <Chart
              data={data}
              min={0}
              max={16}>
              <Rules color={colors[0]} y={4} />
              <Bar />
              <XAxis
                format={s => s.toUpperCase()}
                labels={[
                  'a', 'b', 'c', 'd',
                  'e', 'f', 'g', 'h'
                ]} />
            </Chart>
          </div>
        )}
      </VictoryAnimation>
    </section>
  )
}

export default BarDemo

