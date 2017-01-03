
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import { Rules } from '../src'
import Svg from '../src/Svg'
import Rule from '../src/Rule'

let wrapper
let inner

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Rules data={[ 1 ]} />)
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

test('color prop is passed to Rule children', t => {
  const wrapper = shallow(
    <Rules
      x
      data={[1]}
      color='tomato'
    />
  )
  inner = wrapper.first().shallow()
  const ruleProps = inner.find(Rule).props()
  t.is(ruleProps.color, 'tomato')
})

test('styles root element', t => {
  const wrapper = shallow(
    <Rules
      data={[ 1 ]}
      style={{ color: 'tomato' }} />
  )
  inner = wrapper.first().shallow()
  t.deepEqual(inner.props().style, {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    color: 'tomato'
  })
})

test('renders null when no data is provided', t => {
  wrapper = shallow(<Rules />)
  t.is(wrapper.html(), '')
})

