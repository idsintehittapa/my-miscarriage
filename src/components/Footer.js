import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position:absolute;
  // left:0;
  // bottom:0;
  // right:0;
`

export const Footer = () => {
  return (
    <Container>
      <p> This page represent testimonies of experienced miscarriages.
        The content is not intended as a substitute for professional
        medical advice, diagnosis, or treatment. Always seek the advice of your
        physician or other qualified health provider with any questions
        you may have regarding a medical condition.
      </p>
    </Container>
  )
}