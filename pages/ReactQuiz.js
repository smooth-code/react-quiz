import React from 'react'
import axios from 'axios'
import Quiz from '../components/Quiz'
import ScoreResult from '../components/ScoreResult'

class ReactQuiz extends React.Component {
  state = {
    data: null,
    error: null,
    disabled: null,
    answerId: null,
  }

  componentWillMount() {
    this.setState({ data: 'pending' })
    this.getCurrentQuestion()
      .then(response => {
        this.setState({
          data: response.data,
          disabled: false,
        })
      })
      .catch(error => this.setState(error))
  }

  getCurrentQuestion = async () => axios.get('/api/current')

  handleClick = event => {
    this.setState({ answerId: event.target.value })
  }
  handleOnSumbit = async event => {
    event.preventDefault()
    try {
      await axios.post('/api/submit', {
        choice: this.state.answerId,
      })
    } catch (error) {
      this.setState({ error })
    }
  }
  handleClickNext = async () => {
    try {
      const response = await axios.get('/api/next')
      this.setState({ data: response.data })
    } catch (error) {
      this.setState({ data: null, error })
    }
  }
  render() {
    const { data, error } = this.state
    if (error) return <p>Oups something went wrong</p>
    if (data === 'pending') return <span>Loading...</span>
    if (data.score) return <ScoreResult {...data.score} />
    return this.state.data.question ? (
      <div>
        <h1>in Quizz</h1>
        <a href="/logout">Logout</a>
        <Quiz
          question={data.question}
          answers={data.choices}
          countdown={data.time
            .split(':')
            .reduce((acc, time) => acc * 60 + Number(time))}
          currentQuestion={data.id}
          questionCount={data.length}
          disabledSubmitButton={this.state.disabled}
          onSubmit={this.handleOnSumbit}
          onSelect={this.handleClick}
          getNextQuestion={this.handleClickNext}
        />
      </div>
    ) : (
      <button onClick={this.handleClickNext}>Start</button>
    )
  }
}
export default ReactQuiz
