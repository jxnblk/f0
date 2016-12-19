
import test from 'ava'
import getScale from '../src/get-scale'

const data = [
  0,
  4,
  8,
  16,
  6
]

let props

test('returns scale props', t => {
  props = getScale({ data })
  t.is(typeof props, 'object')
  t.is(typeof props.scale, 'object')
  t.is(typeof props.scale.x, 'function')
  t.is(typeof props.scale.y, 'function')
  t.is(typeof props.scale.pad, 'object')
  t.is(typeof props.scale.pad.x, 'function')
  t.is(typeof props.scale.pad.width, 'number')
  t.is(typeof props.labels, 'object')
  t.is(Array.isArray(props.labels.y), true)
  t.is(Array.isArray(props.points), true)
})

test('automatically sets min and max based on data', t => {
  t.is(props.scale.y(0), 100)
  t.is(props.scale.y(16), 0)
})

test('accepts a min prop', t => {
  const { scale } = getScale({ data, min: -4 })
  t.is(scale.y(-4), 100)
})

test('accepts a max prop', t => {
  const { scale } = getScale({ data, max: 20 })
  t.is(scale.y(20), 0)
})

test('accepts a padRatio prop', t => {
  props = getScale({ data, padRatio: 1.5 })
  t.is(props.scale.pad.width, 12)
})

test('accepts a niceCount prop', t => {
  props = getScale({ data, niceCount: 3 })
  t.is(props.scale.y(20), 0)
})

