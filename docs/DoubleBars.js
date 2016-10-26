
import React from 'react'
import { VictoryAnimation } from 'victory'
import {
  Svg,
  Bar,
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
      color: '#fff',
      backgroundColor: colors[3],
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
        data={{ data, neg }}>
        {({ data, neg }) => (
          <div>
            <h2 className='h1 xh0 mt0 mb3 mono' style={sx.title}>
              <div>Bar</div>
              <div style={sx.space} />
              <div>
                <div className='h5 right-align'>Time dilation</div>
                <div>{fl(data[data.length - 1])}</div>
              </div>
            </h2>
            <Svg>
              <Rules y={5} />
              <Bar
                viewBox='0 0 100 200'
                height={128}
                data={data}
                min={0}
                max={16}
              />
              <Bar
                viewBox='0 0 100 200'
                y={50}
                height={128}
                color={colors[2]}
                data={neg}
                min={-16}
                max={0}
              />
            </Svg>
          </div>
        )}
      </VictoryAnimation>
    </section>
  )
}

export default DoubleBars

