import { shallow } from 'enzyme'
import React from 'react'
import Quiz from './Quiz'

describe('#Quiz', () => {
  it('should render a Quiz component with a question, answers, a timer and the progressbar', () => {
    const wrapper = shallow(
      <Quiz
        question="#2 + 2 ?"
        answers={['2', '4', '3', '5']}
        countdown={20}
        currentQuestion="4"
        questionCount={20}
      />,
    )
    expect(wrapper.find('Question').prop('question')).toEqual('#2 + 2 ?')
    expect(
      wrapper
        .find('Answer')
        .at(2)
        .prop('answer'),
    ).toEqual('3')
    expect(wrapper.find('Timer').prop('countdown')).toBe(20)
    expect(wrapper.find('ProgressBar').prop('currentQuestion')).toEqual('4')
  })
})
