
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Svg from '../src/Svg'
import { Bar } from '../src'

let wrapper

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Bar data={[ 1 ]} />)
  })
})

test('contains an Svg', t => {
  const inner = wrapper.first().shallow()
  t.is(inner.is(Svg), true)
})

test('has scale props', t => {
  const props = Object.keys(wrapper.props())
  t.is(props.includes('scale'), true)
  t.is(props.includes('points'), true)
  t.is(props.includes('labels'), true)
})

test('color prop changes fill', t => {
  const wrapper = shallow(
    <Bar
      data={[1]}
      color='tomato'
    />
  )
  const inner = wrapper.first().shallow()
  t.is(inner.props().fill, 'tomato')
})

test('styles root element', t => {
  const wrapper = shallow(
    <Bar
      data={[ 1 ]}
      style={{ color: 'tomato' }} />
  )
  const inner = wrapper.first().shallow()
  t.deepEqual(inner.props().style, {
    position: 'relative',
    color: 'tomato'
  })
})

test('renders null when no data is provided', t => {
  wrapper = shallow(<Bar />)
  t.is(wrapper.html(), '')
})

