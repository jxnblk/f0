
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Svg from '../src/Svg'
import { Area } from '../src'

let wrapper
let inner

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Area data={[ 1 ]} />)
  })
})

test('contains an Svg', t => {
  inner = wrapper.first().shallow()
  t.is(inner.is(Svg), true)
})

test('has scale props', t => {
  const props = Object.keys(wrapper.props())
  t.is(props.includes('scale'), true)
  t.is(props.includes('points'), true)
  t.is(props.includes('labels'), true)
})

test('color prop changes fill', t => {
  wrapper = shallow(
    <Area
      data={[ 1 ]}
      color='tomato'
    />
  )
  inner = wrapper.first().shallow()
  t.is(inner.props().fill, 'tomato')
})

test('renders null when no data is provided', t => {
  wrapper = shallow(<Area />)
  t.is(wrapper.html(), '')
})

