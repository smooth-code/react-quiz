import React from 'react'
import { storiesOf } from '@storybook/react'
import ProgressBar from '../components/ProgressBar'
import Timer from '../components/Timer'
import NextButton from '../components/NextButton'
import ScoreResult from '../components/ScoreResult'
import Quiz from '../components/Quiz'

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
storiesOf('NextButton', module)
  .add('disabled', () => <NextButton disabled />)
  .add('not disabled', () => <NextButton />)
storiesOf('Timer', module).add('Basic Timer', () => <Timer countdown={15} />)

storiesOf('ScoreResult', module).add('12/20 Final Score', () => (
  <ScoreResult totalScore={20} userScore={12} />
))
storiesOf('Quiz', module).add('All fields filled', () => (
  <Quiz
    question="---
# question: 2 + 2
---"
    answers={['## 2', '## 4', '## 3', '## 5']}
    currentQuestion="4"
    questionCount="20"
  />
))
