import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, AlertTitle } from '@material-ui/lab'

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
  TestimoniesWrapper,
  Title,
  Container,
  P,
  FormSign,
  StyledButton
} from '../styles/Styles'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [key, setKey] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [signInOK, setSignInOK] = useState(false)
  const [signInFail, setSignInFail] = useState(false)

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
        password,
        key
      })
    })
      .then((res) => {
        setEmail('')
        setPassword('')
        setKey('')
        if (res.status === 201) {
          console.log(res.json)
          setSignInOK(true)
          setSignInFail(false)
          return res.json()
        } else {
          setSignInOK(false)
          setSignInFail(true)
          throw new Error(res.status)
        }
      })
      .catch((error) => console.log(error))
  }
  return (
    <>
      <TestimoniesWrapper>
        <Container>
          <Title>Sign up</Title>
          <P>To sign up you need to have been verified as a moderator</P>
          <FormSign onSubmit={(event) => event.preventDefault()}>
            <TextField
              required
              id="ValidationKey"
              label="Moderator Key"
              value={key}
              onChange={(event) => setKey(event.target.value)} />
            <TextField
              required
              id="Email"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              inputProps={validEmail}
              helperText={email === '' ? 'x@xxx.xx' : ' '} />
            <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel>
            <Input
              required
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              fullWidth
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
            {signInFail && (
              <Alert severity="error"><AlertTitle>Error</AlertTitle>Creating a moderator was unsuccessful</Alert>
            )}
            {signInOK && (
              <Link to="/moderator">
                <Alert severity="success">Create was Successful, back to login?</Alert>
              </Link>
            )}
          </FormSign>
        </Container>
      </TestimoniesWrapper>
    </>
  )
}
