import React from 'react'
import { Helmet } from 'react-helmet'

import { SignIn } from './SignIn'
import { TestimoniesWrapper } from '../styles/Styles'

export const Moderator = () => {
  const TITLE = 'Moderator'

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <TestimoniesWrapper>
        <SignIn />
      </TestimoniesWrapper>
    </>
  )
}
