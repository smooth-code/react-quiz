import React from 'react'
import { storiesOf } from '@storybook/react'
import ProgressBar from '../components/ProgressBar'
import Timer from '../components/Timer'

storiesOf('ProgressBar', module)
  .add('0/20', () => <ProgressBar currentQuestion={0} />)
  .add('1/20', () => <ProgressBar currentQuestion={1} />)
  .add('19/20', () => <ProgressBar currentQuestion={19} />)
  .add('20/20', () => <ProgressBar currentQuestion={20} />)
  .add('0/30', () => <ProgressBar questionCount={30} />)
  .add('Large', () => <ProgressBar size={800} />)
  .add('Without ScoreBox', () => <ProgressBar scoreBox={false} />)
  .add('Red', () => <ProgressBar color="#BD4932" />)

storiesOf('Timer', module).add('Basic', () => <Timer countdown={15} />)
