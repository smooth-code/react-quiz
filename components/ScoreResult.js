import React from 'react'
import PropTypes from 'prop-types'

const ScoreResult = ({ totalScore, userScore }) => (
  <p>{`Vous avez obtenu ${userScore}/${totalScore} au quiz React.`}</p>
)

ScoreResult.propTypes = {
  totalScore: PropTypes.number,
  userScore: PropTypes.number,
}

export default ScoreResult
