import { shallow } from 'enzyme'
import React from 'react'
import Answer from './Answer'

describe('#Answer', () => {
  it('should render a question component using ReactMarkdown', () => {
    const wrapper = shallow(<Answer answer="2 + 2 = 4" />)
    expect(wrapper.find('Markdown').prop('source')).toEqual('2 + 2 = 4')
  })
})
