import { shallow } from 'enzyme'
import React from 'react'
import NextButton from './NextButton'

describe('#NextButton', () => {
  it('should render a button that can be disabled', () => {
    const wrapper = shallow(
      <div>
        <NextButton disabled />
        <NextButton />
      </div>,
    )
    const buttons = wrapper.find('NextButton')
    expect(buttons.at(0).props().disabled).toBe(true)
    expect(buttons.at(1).props().disabled).toBeUndefined()
  })
})
