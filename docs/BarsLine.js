
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Group,
  Bar,
  Line,
  Rules
} from '../src'
import { fl } from './util'

const DoubleBars = ({
  data,
  neg,
  colors
}) => {
  const sx = {
    root: {
      color: colors[4],
      backgroundColor: colors[0],
      transitionProperty: 'color, background-color, fill, stroke',
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
        data={{ data, neg }}>
        {({ data, neg }) => {
          const line = data.map((d, i) => d + neg[i])

          return (
            <div>
              <h2 className='h1 xh0 mt0 mb3 mono' style={sx.title}>
                <div>Bar + Line</div>
                <div style={sx.space} />
                <div>
                  <div className='h5 right-align'>Tachyonic inversion</div>
                  <div>{fl(line[line.length - 1])}</div>
                </div>
              </h2>
              <Group>
                <Bar
                  height={128}
                  viewBox='0 0 100 200'
                  data={data}
                  min={0}
                  max={16}
                />
                <Bar
                  height={128}
                  viewBox='0 0 100 200'
                  y={50}
                  color={colors[2]}
                  data={neg}
                  min={-16}
                  max={0}
                />
                <Line
                  data={line}
                  pad
                  dots
                  dotFill={colors[3]}
                  dotSize={16}
                  color='#fff'
                  min={-16}
                  max={16}
                />
              </Group>
            </div>
          )
        }}
      </VictoryAnimation>
    </section>
  )
}

export default DoubleBars

