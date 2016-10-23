
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Line,
  Group,
  Rules
} from '../src'
import styles from './styles'
import { format } from 'd3-format'

const fl = format('.2f')

const Header = (props) => {
  const sx = {
    root: {
      color: '#fff', // styles.c[0],
      backgroundColor: styles.b[3],
    },
    title: {
      color: styles.b[1]
    }
  }

  return (
    <header
      className='pl3 pr3 pt6 pb6'
      style={sx.root}>
      <VictoryAnimation
        duration={750}
        data={{ data: props.logo }}>
        {({ data }) => (
          <div className=''>
            <h1 className='h1 xh0 mt0 mb3 mono' style={sx.title}>f0 {fl(data[data.length - 1])}</h1>
            <Group height={192}>
              <Rules y={5} color={styles.b[1]} />
              <Line
                data={data}
                min={0}
                max={16}
                strokeWidth={6}
                dots
                color='#fff'
                area={styles.b[4]}
                areaOpacity={1/2}
                dotSize={24}
                dotFill={styles.b[3]}
              />
            </Group>
          </div>
        )}
      </VictoryAnimation>
      <p className='h3 bold'>
        Fully fluid responsive SVG charts for React
      </p>
      {/*
      <button>Tweet</button>
      <button>Star</button>
      */}
    </header>
  )
}

export default Header

