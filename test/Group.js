
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import { Group } from '../src'
import Svg from '../src/Svg'

let wrapper

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Group />)
  })
})

test('is an Svg', t => {
  t.is(wrapper.is(Svg), true)
})

