import React from 'react'
import styled from 'styled-components/macro'

const CardContainer = styled.section`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14),
  0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px; 
  background: rgba(123, 163, 176, 0.5);
  margin: 10px;
  // max-width: 350px;
`

const CardTitle = styled.h1`
  margin: 0;
  font-size: 2.2em;
`
const TimeStamp = styled.p`
  font-size: 0.8em;
  color: rgba(67, 67, 67, 0.8)
`

const SecondaryText = styled.p`
  margin: 0;
`
const StoryText = styled.p`
  margin: 5px;
`
const CoverImg = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`
const Content = styled.div`
  padding: 20px;
`

export const Card = ({ title, secondaryText, coverImg, name, createdAt, post, story }) => {
  return (
    <CardContainer>
      {coverImg && <CoverImg src={coverImg} />}
      <Content>
        {title && <CardTitle>Week {title}</CardTitle>}
        {createdAt && <TimeStamp>{createdAt}</TimeStamp>}
        {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        {story && <StoryText>{story}</StoryText>}
        {name && <SecondaryText>{name}</SecondaryText>}
        {post && <SecondaryText>{post}</SecondaryText>}
      </Content>
    </CardContainer>
  )
}