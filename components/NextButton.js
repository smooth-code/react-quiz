import React from 'react'
import PropTypes from 'prop-types'

const NextButton = ({ disabled, ...props }) => (
  <button type="submit" value="submit" disabled={disabled} {...props}>
    Next
  </button>
)

NextButton.propTypes = {
  disabled: PropTypes.bool,
}

export default NextButton
