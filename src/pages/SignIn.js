import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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

import { signIn } from '../paths/Api-paths'
import {
  SignTitle,
  Container,
  FormSign,
  StyledButton,
  StyledLinkSign,
  PSign
} from '../styles/Styles'

export const SignIn = () => {
  const tokenFromStorage = () => window.localStorage.getItem('tokenAuth') || ''
  const [token, setToken] = useState(tokenFromStorage)
  const [signInOk, setSignInOk] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const history = useHistory()
  console.log(token)

  // Form validation
  const minimumPasswordLength = { minLength: 5 }
  const validEmail = { pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$' }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSignIn = () => {
    fetch(signIn, {
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
          return res.json()
        } else throw new Error('Unable to sign in. Please check that e-mail and password are correct')
      })
      .then((data) => {
        setSignInOk(true)
        setToken(data.accessToken)
        window.localStorage.setItem('tokenAuth', data.accessToken)
        history.push('/moderator/posts')
        console.log(data.accessToken)
      })
      .catch((error) => {
        setSignInOk(false)
        console.log(error)
      })
  }
  if (token) {
    history.push('/moderator/posts')
  }
  return (
    <>
      <Container>
        <SignTitle>Sign in here</SignTitle>
        <FormSign onSubmit={handleSubmit}>
          <TextField
            required
            id="email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            inputProps={validEmail}
            helperText={email === '' ? 'x@xxx.xx' : ' '} />
          <InputLabel htmlFor="password-signin">Password*</InputLabel>
          <Input
            required
            id="password-signin"
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
            onClick={handleSignIn}
            disabled={!email || !password}>
            Sign in
          </StyledButton>
          {!signInOk && (
            <Alert severity="error"><AlertTitle>Error</AlertTitle>Could not sign in</Alert>
          )}
        </FormSign>
        <StyledLinkSign to="/moderator/signup">
          <PSign>Sign up as a moderator?</PSign>
        </StyledLinkSign>
      </Container>
    </>
  )
}
