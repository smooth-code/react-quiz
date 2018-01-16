import React from 'react'
import { shallow } from 'enzyme'
import Timer from './Timer'

describe('Timer', () => {
  it('should render a timer', () => {
    const wrapper = shallow(<Timer countdown={42} />)
    expect(wrapper.text()).toEqual('42')
  })
})
