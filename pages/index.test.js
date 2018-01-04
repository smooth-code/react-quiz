import React from 'react'
import { shallow } from 'enzyme'
import Index from './index'

describe('Index', () => {
  it('should display "Hello world!"', () => {
    const wrapper = shallow(<Index />)
    expect(wrapper.equals('Hello world!')).toBe(true)
  })
})
