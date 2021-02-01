import React from 'react'
import { Helmet } from 'react-helmet'
import { SignUp } from './SignUp'
import { SignIn } from './SignIn'

export const Moderator = () => {
  const TITLE = 'Moderator'

  // toggle between sign up/in

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <SignUp />
      <p>Already a moderator?</p>
      <SignIn />
    </>
  )
}
