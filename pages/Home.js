import React from 'react'

const Home = ({ isAuth }) => (
  <div>
    <h1>React Quizz</h1>
    {isAuth ? (
      <div>
        <a href="/logout">logout</a>
        <a href="/ReactQuiz"> Start Quiz</a>
      </div>
    ) : (
      <a href="/auth/github">GitHub Connect</a>
    )}
  </div>
)

Home.getInitialProps = ({ req }) => ({ isAuth: req.isAuthenticated() })

export default Home
