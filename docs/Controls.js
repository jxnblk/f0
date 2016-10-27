
import React from 'react'
import {
  Slider
} from 'rebass'

const Controls = props => {
  const {
    data,
    neg,
    logo,
    onChange
  } = props

  const handleNumberChange = i => e => {
    const { name, value } = e.target
    const arr = props[name]
    const num = parseFloat(value)
    arr[i] = num
    onChange({ [name]: arr })
  }

  return (
    <div>
      {neg.map((d, i) => (
        <Slider
          key={i}
          name='neg'
          label={`neg[${i}]: ${d}`}
          value={d}
          max={0}
          min={-16}
          onChange={handleNumberChange(i)}
        />
      ))}
      <hr />
      {data.map((d, i) => (
        <Slider
          key={i}
          name='data'
          label={`data[${i}]: ${d}`}
          value={d}
          max={16}
          onChange={handleNumberChange(i)}
        />
      ))}
    </div>
  )
}

export default Controls

