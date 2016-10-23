
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Group,
  Bars,
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
      color: '#fff',
      backgroundColor: styles.b[3]
    },
    title: {}
  }
  return (
    <section
      className='pl3 pr3 pt6 pb6'
      style={sx.root}>
      <VictoryAnimation
        duration={750}
        data={{ data, neg }}>
        {({ data, neg }) => (
          <div>
            <h2 className='h1 xh0 mt0 mb3 mono' style={sx.title}>Bars {fl(data[data.length - 1])}</h2>
            <Bars
              height={128}
              data={data}
              min={0}
              max={16}
            />
            <Bars
              height={128}
              color={styles.b[2]}
              data={neg}
              min={-16}
              max={0}
            />
          </div>
        )}
      </VictoryAnimation>
    </section>
  )
}

export default DoubleBars

