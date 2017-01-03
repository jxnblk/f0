
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Svg from '../src/Svg'
import { Line } from '../src'

let wrapper
let inner

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Line data={[ 1 ]} />)
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

test('color prop changes stroke', t => {
  const wrapper = shallow(
    <Line
      data={[1]}
      color='tomato'
    />
  )
  inner = wrapper.first().shallow()
  const path = inner.find('path')
  t.is(path.props().stroke, 'tomato')
})

test('styles root element', t => {
  const wrapper = shallow(
    <Line
      data={[ 1 ]}
      style={{ color: 'tomato' }} />
  )
  inner = wrapper.first().shallow()
  t.deepEqual(inner.props().style, {
    position: 'relative',
    color: 'tomato'
  })
})

test('renders null when no data is provided', t => {
  wrapper = shallow(<Line />)
  t.is(wrapper.html(), '')
})

