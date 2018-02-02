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
  onSubmit,
  onSelect,
  disabledSubmitButton,
  getNextQuestion,
}) => (
  <div>
    <Question question={question} />
    <form onSubmit={onSubmit}>
      {answers.map((answer, key) => (
        <Answer
          answer={answer}
          key={String(answer)}
          value={key}
          onClick={onSelect}
        />
      ))}
      <button type="submit" value="submit" disabled={disabledSubmitButton}>
        submit and pause
      </button>
      <NextButton disabled={disabledSubmitButton} onClick={getNextQuestion} />
    </form>
    <Timer countdown={countdown} />
    <ProgressBar
      currentQuestion={currentQuestion}
      questionCount={questionCount}
    />
  </div>
)

export default Quiz
