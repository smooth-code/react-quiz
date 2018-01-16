import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'
import Index from './index'

describe('Index', () => {
  it('should render the HomeComponent', () => {
    const wrapper = shallow(<Index />)
    expect(wrapper.contains(<Home />)).toBe(true)
  })
})
