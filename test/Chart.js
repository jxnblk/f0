
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import { Chart } from '../src'

let wrapper
let inner

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Chart />)
  })
})

test('contains a div', t => {
  inner = wrapper.first().shallow()
  t.is(inner.is('div'), true)
})

test('has scale props', t => {
  wrapper = shallow(<Chart data={[]} />)
  const props = Object.keys(wrapper.props())
  t.is(props.includes('scale'), true)
  t.is(props.includes('points'), true)
  t.is(props.includes('labels'), true)
})

test('has hover props', t => {
  wrapper = shallow(
    <Chart
      data={[ 1, 2 ]}
      hoverable />
  )
  inner = wrapper
    .first().shallow()
    .first().shallow()
    .first().shallow()
  const props = Object.keys(inner.props().children.props)
  t.is(props.includes('hoverPoint'), true)
  t.is(props.includes('mouse'), true)
})

