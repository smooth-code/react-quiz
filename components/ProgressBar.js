import React from 'react'
import styled from 'styled-components'
import { lighten, invert, darken } from 'polished'

const Container = styled.div`
  max-width: ${props => props.maxSize}px;
`

const Wrapper = styled.div`
  margin: 2px 30px;
  overflow: visible;
`
const ScoreBoxWrapper = styled.div`
  margin: 0 3px;
`

const ScoreBox = styled.div`
  width: 50px;
  margin-left: ${props => (props.progress ? '-27px' : '-20px')};
  padding-left: calc(${props => `${props.progress * 100}%`});
  color: ${props => invert(props.color)};
`

const ScoreContent = styled.div`
  background-color: ${props => props.color};
  border: solid 1px ${props => darken(0.1, props.color)};
  padding: 5px;
  text-align: center;
  width: 40px;
  color: ${props => lighten(0.3, props.color)};
  border-radius: 3px;
`

const CurrentProgress = styled.span`
  color: ${props => lighten(0.5, props.color)};
`

const ArrowDownContainer = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid ${props => darken(0.1, props.color)};
  margin-left: auto;
  margin-right: auto;
  margin-top: -1px;
`

const ArrowDown = styled.span`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid ${props => props.color};
  margin-left: -8px;
  padding-top: 2px;
`

const BarWrapper = styled.div`
  background-color: ${props => props.color};
  height: 15px;
  border-radius: 34px;
  padding: 0 5px;
  overflow: hidden;
  align-items: center;
  display: flex;
`

const Bar = styled.div`
  background-color: ${props => lighten(0.3, props.color)};
  height: 5px;
  border-radius: 10px;
  transition: 300ms width;
  will-change: width;
  width: ${props => props.progress}%;
  min-width: 5px;
`

const ProgressBar = ({
  size = 500,
  currentQuestion = 0,
  questionCount = 20,
  color = '#4c909b',
}) => {
  const maxSize = Math.max(size, 150)
  const progress = Math.min(currentQuestion, questionCount)
  return (
    <Container maxSize={maxSize}>
      <Wrapper>
        <ScoreBoxWrapper>
          <ScoreBox color={color} progress={progress / questionCount}>
            <ScoreContent color={color}>
              <CurrentProgress color={color}>{currentQuestion}</CurrentProgress>
              /{questionCount}
            </ScoreContent>
            <ArrowDownContainer color={color}>
              <ArrowDown color={color} />
            </ArrowDownContainer>
          </ScoreBox>
        </ScoreBoxWrapper>
        <BarWrapper maxSize={maxSize} color={color}>
          <Bar progress={progress / questionCount * 100} color={color} />
        </BarWrapper>
      </Wrapper>
    </Container>
  )
}

export default ProgressBar
