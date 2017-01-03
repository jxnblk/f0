
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import { Dots } from '../src'
import Svg from '../src/Svg'
import Dot from '../src/Dot'

let wrapper
let inner

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Dots data={[ 1 ]} />)
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

test('color prop is passed to Dot', t => {
  const wrapper = shallow(
    <Dots
      data={[1]}
      color='tomato'
    />
  )
  inner = wrapper.first().shallow()
  const dotProps = inner.find(Dot).props()
  t.is(dotProps.color, 'tomato')
})

test('renders null when no data is provided', t => {
  wrapper = shallow(<Dots />)
  t.is(wrapper.html(), '')
})

