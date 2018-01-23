import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import ProgressBar from '../components/ProgressBar'

storiesOf('ProgressBar', module)
  .add('0/20', () => <ProgressBar currentQuestion={0} />)
  .add('1/20', () => <ProgressBar currentQuestion={1} />)
  .add('19/20', () => <ProgressBar currentQuestion={19} />)
  .add('20/20', () => <ProgressBar currentQuestion={20} />)
  .add('0/30', () => <ProgressBar questionCount={30} />)
  .add('Large', () => <ProgressBar size={800} />)
  .add('Without ScoreBox', () => <ProgressBar scoreBox={false} />)
  .add('Red', () => <ProgressBar color="#BD4932" />)
