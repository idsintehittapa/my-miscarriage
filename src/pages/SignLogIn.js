import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import { signUp } from '../paths/Api-paths'
import {
  Container,
  Form,
  Title,
  // StyledNameInput,
  // StyledSelectInput,
  StyledButton
} from '../styles/Styles'

// sign in

export const SignLogIn = () => {
  const TITLE = 'Moderator'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(signUp, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => {
        setEmail('') // this is stupid, it has to be a smarter way of doing this
        setPassword('') // mapping?
        if (res.status === 201) {
          console.log(res.json)
          return res.json()
        } else throw new Error(res.status)
      })
      .catch((error) => console.log(error)) // _________This needs to be looked at
  }

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Container>
        <h2>This is the log/sign up part for moderators</h2>
        <Form onSubmit={(event) => event.preventDefault()}>
          <Title>Log in/Sign up</Title>
          <label htmlFor="email"> Email*
            <input
              id="email"
              value={email}
              type="text"
              onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label htmlFor="password"> Password
            <input
              id="password"
              value={password}
              type="text"
              onChange={(event) => setPassword(event.target.value)} />
          </label>
          <StyledButton
            type="submit"
            onClick={handleSubmit}
            disabled={!email}>
            Submit
          </StyledButton>
        </Form>
      </Container>
    </>
  )
}
