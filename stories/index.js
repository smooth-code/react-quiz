import React from 'react'
import { storiesOf } from '@storybook/react'
import ProgressBar from '../components/ProgressBar'

storiesOf('ProgressBar', module)
  .add('zero', () => (
    <ProgressBar
      size={800}
      currentQuestion={0}
      questionCount={30}
      color="#4C909B"
    />
  ))
  .add('one', () => (
    <ProgressBar
      size={800}
      currentQuestion={1}
      questionCount={30}
      color="#4C909B"
    />
  ))
  .add('half', () => (
    <ProgressBar
      size={800}
      currentQuestion={10}
      questionCount={30}
      color="#4C909B"
    />
  ))
  .add('end', () => (
    <ProgressBar
      size={800}
      currentQuestion={30}
      questionCount={30}
      color="#4C909B"
    />
  ))
  .add('small red whitout scoreBox', () => (
    <ProgressBar
      size={400}
      currentQuestion={10}
      questionCount={20}
      color="#BD4932"
      scoreBox={false}
    />
  ))
