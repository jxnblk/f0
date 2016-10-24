
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Group,
  Bars,
  Line,
  Rules
} from '../src'
import styles from './styles'
import { format } from 'd3-format'

const fl = format('.2f')

const DoubleBars = ({
  data,
  neg
}) => {
  const sx = {
    root: {
      color: styles.b[4],
      backgroundColor: styles.b[0]
    },
    title: {
      display: 'flex',
      flexWrap: 'wrap'
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
                <div>Bars + Line</div>
                <div style={sx.space} />
                <div>
                  {fl(line[line.length - 1])}
                </div>
              </h2>
              <Group>
                <Bars
                  height={128}
                  viewBox='0 0 100 200'
                  data={data}
                  min={0}
                  max={16}
                />
                <Bars
                  height={128}
                  viewBox='0 0 100 200'
                  y={50}
                  color={styles.b[2]}
                  data={neg}
                  min={-16}
                  max={0}
                />
                <Line
                  data={line}
                  withBars
                  dots
                  dotFill={styles.b[3]}
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

