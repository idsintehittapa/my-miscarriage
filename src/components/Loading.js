import React from 'react'

import {
  TestimoniesWrapper,
  Container,
  LoadingSpinner
} from '../styles/Styles'

export const Loading = () => {
  return (
    <TestimoniesWrapper>
      <Container>
        <LoadingSpinner />
      </Container>
    </TestimoniesWrapper>
  )
}