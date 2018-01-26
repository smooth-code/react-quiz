import { shallow } from 'enzyme'
import React from 'react'
import Question from './Question'

describe('#Question', () => {
  it('should render a question component', () => {
    const wrapper = shallow(<Question question="2 + 2 ?" />)
    expect(wrapper.find('ReactMarkdown').prop('source')).toEqual('2 + 2 ?')
  })
})