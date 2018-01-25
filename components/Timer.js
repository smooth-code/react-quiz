import React from 'react'
import PropTypes from 'prop-types'

const Timer = ({ countdown }) => (
  <div>
    <span>{countdown}</span>
  </div>
)

Timer.propTypes = {
  countdown: PropTypes.number,
}

export default Timer
