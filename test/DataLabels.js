

import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import { DataLabels } from '../src'

let wrapper
let inner

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<DataLabels data={[ 1 ]} />)
  })
})

test('has scale props', t => {
  const props = Object.keys(wrapper.props())
  t.is(props.includes('scale'), true)
  t.is(props.includes('points'), true)
  t.is(props.includes('labels'), true)
})

test('styles label elements', t => {
  const wrapper = shallow(
    <DataLabels
      data={[ 1 ]}
      style={{ color: 'tomato' }} />
  )
  inner = wrapper.first().shallow()
  const labelStyle = inner.props()
    .children[0].props
    .children.props.style
  t.is(labelStyle.color, 'tomato')
})

test('renders null when no data is provided', t => {
  wrapper = shallow(<DataLabels />)
  t.is(wrapper.html(), '')
})

