
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Chart,
  Group,
  Line,
  Dots,
  Rules,
  XAxis,
  YAxis,
  DataLabels
} from '../src'
import { fl } from './util'

const LabeledDemo = ({
  data,
  colors
}) => {
  const sx = {
    root: {
      color: colors[1],
      backgroundColor: colors[4],
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
              <div>Axes</div>
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
              niceCount={3}
            >
              <Rules color={colors[0]} />
              <Group>
                <Line />
                <Dots />
              </Group>
              <XAxis
                rule
                labels={[
                  'A',
                  'B',
                  'C',
                  'D',
                  'E',
                  'F',
                  'G',
                  'H',
                ]}
              />
              <YAxis />
              <DataLabels
                format={Math.round}
              />
            </Chart>
          </div>
        )}
      </VictoryAnimation>
    </section>
  )
}

export default LabeledDemo

