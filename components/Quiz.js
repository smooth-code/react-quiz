import React from 'react'
import Answer from './Answer'
import Question from './Question'
import Timer from './Timer'
import ProgressBar from './ProgressBar'
import NextButton from './NextButton'

const Quiz = ({
  question,
  answers,
  countdown,
  currentQuestion,
  questionCount,
  disabled,
}) => (
  <div>
    <Question question={question} />
    <form>
      {answers.map(answer => <Answer answer={answer} key={answer} />)}
    </form>
    <NextButton disabled={disabled} />
    <Timer countdown={countdown} />
    <ProgressBar
      currentQuestion={currentQuestion}
      questionCount={questionCount}
    />
  </div>
)

export default Quiz
