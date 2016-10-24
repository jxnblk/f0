
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Bars
} from '../src'
import styles from './styles'
import { format } from 'd3-format'

const fl = format('.2f')

const BarDemo = ({
  data
}) => {
  const sx = {
    root: {
      color: styles.b[4],
      backgroundColor: styles.b[1]
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
        data={{ data }}>
        {({ data }) => (
          <div>
            <h2 className='h1 xh0 mt0 mb3 mono' style={sx.title}>
              <div>Bars</div>
              <div style={sx.space} />
              <div>{fl(data[data.length - 1])}</div>
            </h2>
            <Bars
              data={data}
              min={0}
              max={16}
            />
          </div>
        )}
      </VictoryAnimation>
    </section>
  )
}

export default BarDemo

