/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import Markdown from './Markdown'

const Answer = ({ answer, onClick, value }) => (
  <label>
    <input name="answer" value={value} onClick={onClick} type="radio" />
    <Markdown source={answer} />
  </label>
)

export default Answer
