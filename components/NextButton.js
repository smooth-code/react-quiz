import React from 'react'
import PropTypes from 'prop-types'

const NextButton = ({ disabled }) => <button disabled={disabled}>Next</button>

NextButton.propTypes = {
  disabled: PropTypes.bool,
}

export default NextButton
