import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import ProgressBar from '../components/ProgressBar'

storiesOf('ProgressBar', module)
  .add('with Scorebox', () => (
    // <Button onClick={action('clicked')}>Hello Button</Button>
    <ProgressBar
      size={800}
      currentQuestion={10}
      questionCount={30}
      color="#4C909B"
    />
  ))
  .add('without Scorebox', () => (
    <ProgressBar
      size={400}
      currentQuestion={1}
      questionCount={20}
      color="#BD4932"
      scroreBox={false}
    />
  ))
