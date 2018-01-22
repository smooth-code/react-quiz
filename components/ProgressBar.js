import React from 'react'
import styled from 'styled-components'
import { lighten, invert, darken } from 'polished'

const Container = styled.div`
  max-width: ${props => props.maxSize}px;
  margin: 2px 30px;
  overflow: visible;
`

const Score = styled.div`
  margin: 0 3px;

  div.score {
    width: 50px;
    margin-left: ${props => (props.progress ? '-27px' : '-20px')};
    padding-left: calc(${props => `${props.progress * 100}%`});
    color: ${props => invert(props.color)};
  }

  div.scoreContent {
    background-color: ${props => props.color};
    border: solid 1px ${props => darken(0.1, props.color)};
    padding: 5px;
    text-align: center;
    width: 40px;
    color: ${props => lighten(0.3, props.color)};
    border-radius: 3px;
  }

  span.currentProgress {
    color: ${props => lighten(0.5, props.color)};
  }

  div.arrowDownContainer {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${props => darken(0.1, props.color)};
    margin-left: auto;
    margin-right: auto;
    margin-top: -1px;
  }

  span.arrowDown {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${props => props.color};
    margin-left: -8px;
    padding-top: 2px;
  }
`

const BarWrapper = styled.div`
  background-color: ${props => props.color};
  height: 15px;
  border-radius: 34px;
  padding: 0 5px;
  overflow: hidden;
  align-items: center;
  display: flex;

  div {
    background-color: ${props => lighten(0.3, props.color)};
    height: 5px;
    border-radius: 10px;
    transition: 300ms width;
    will-change: width;
    width: ${props => props.progress}%;
    min-width: 5px;
  }
`

const ProgressBar = ({
  size = 500,
  currentQuestion = 0,
  questionCount = 20,
  color = '#4c909b',
  scoreBox = true,
}) => {
  const maxSize = Math.max(size, 150)
  const progress = Math.min(currentQuestion, questionCount)
  return (
    <Container maxSize={maxSize}>
      {scoreBox && (
        <Score color={color} progress={progress / questionCount}>
          <div className="score">
            <div className="scoreContent">
              <span className="currentProgress">{currentQuestion}</span>
              /{questionCount}
            </div>
            <div className="arrowDownContainer">
              <span className="arrowDown" />
            </div>
          </div>
        </Score>
      )}
      <BarWrapper
        maxSize={maxSize}
        color={color}
        progress={progress / questionCount * 100}
      >
        <div />
      </BarWrapper>
    </Container>
  )
}

export default ProgressBar
