import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.section`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14),
  0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px; 
  background: #e0e0e0;
  margin: 10px;
  max-width: 350px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 2.2em;
`

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b
`
const CoverImg = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`
const Content = styled.div`
  padding: 20px;
`

export const Card = ({ title, secondaryText, coverImg }) => {
  return (
    <Container>
      {coverImg && <CoverImg src={coverImg} />}
      <Content>
        {title && <Title>{title}</Title>}
        {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
      </Content>
    </Container>
  )
}