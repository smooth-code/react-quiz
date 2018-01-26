import React from 'react'
import { shallow } from 'enzyme'
import ScoreResult from './ScoreResult'

describe('ScoreResult', () => {
  it('should render the ScoreResult component', () => {
    const wrapper = shallow(<ScoreResult totalScore={20} userScore={12} />)
    expect(wrapper.text()).toEqual('Vous avez obtenu 12/20 au quiz React.')
  })
})
