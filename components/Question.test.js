import { shallow } from 'enzyme'
import React from 'react'
import Question from './Question'

describe('#Question', () => {
  it('should render a question component using ReactMarkdown', () => {
    const wrapper = shallow(<Question question="2 + 2 ?" />)
    expect(wrapper.find('Markdown').prop('source')).toBe('2 + 2 ?')
  })
})
