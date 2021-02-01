import React, { useState } from 'react'

import {
  TextField,
  IconButton,
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { signUp } from '../paths/Api-paths'
import {
  Container,
  Form,
  StyledButton
} from '../styles/Styles'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  // Form validation
  const minimumPasswordLength = { minLength: 5 }
  const validEmail = { pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$' }

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
        setEmail('')
        setPassword('')
        if (res.status === 201) {
          console.log(res.json)
          return res.json()
        } else throw new Error(res.status)
      })
      .catch((error) => console.log(error)) // _________This needs to be looked at
  }
  return (
    <>
      <Container>
        <h2>Sign up here</h2>
        <p>To sign up you need to have been verified as a moderator</p>
        <Form onSubmit={(event) => event.preventDefault()}>
          <TextField
            required id='standard-default'
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            inputProps={validEmail}
            helperText={email === '' ? 'x@xxx.xx' : ' '} />
          <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel>
          <Input
            required={true}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            fullWidth={true}
            onChange={(event) => setPassword(event.target.value)}
            inputProps={minimumPasswordLength}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            } />
          <StyledButton
            type="submit"
            onClick={handleSubmit}
            disabled={!email || !password}>
            Sign Up
          </StyledButton>
        </Form>
      </Container>
    </>
  )
}
