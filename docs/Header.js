
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Line,
  Svg,
  Rules
} from '../src'
import { format } from 'd3-format'

const fl = format('.2f')

const Header = ({ logo, colors }) => {
  const sx = {
    root: {
      color: colors[4],
      backgroundColor: colors[2],
      transitionProperty: 'color, background-color, fill, stroke',
      transitionDuration: '.2s, .8s',
      transitionTimingFunction: 'ease-out'
    },
    title: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      color: colors[1] // styles.b[1]
    },
    space: {
      flex: '1 1 auto'
    }
  }

  return (
    <header
      className='pl3 pr3 pt6 pb6'
      style={sx.root}>
      <VictoryAnimation
        duration={750}
        data={{ data: logo }}>
        {({ data }) => (
          <div className=''>
            <h1 className='h1 xh0 mt0 mb3 mono' style={sx.title}>
              <div>f0</div>
              <div style={sx.space} />
              <div>
                <div className='h5 right-align'>Subspace frequency</div>
                <div>{fl(data[data.length - 1])}</div>
              </div>
            </h1>
            <Svg height={192}>
              <Rules y={5} color={colors[1]} />
              <Line
                data={data}
                min={0}
                max={16}
                strokeWidth={6}
                dots
                color='#fff'
                dotSize={24}
                dotFill={colors[2]}
              />
            </Svg>
          </div>
        )}
      </VictoryAnimation>
      <p className='h3 bold mb0'>
        Minimal, composable, fully-fluid SVG charts for React
      </p>
      <p className='h3 mt0 bold'>*WIP*</p>
      {/*
      <button>Tweet</button>
      <button>Star</button>
      */}
    </header>
  )
}

export default Header

