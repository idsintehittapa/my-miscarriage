/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Alert, AlertTitle } from '@material-ui/lab'
import styled from 'styled-components/macro'
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core'

import { importTestimonies } from '../paths/Api-paths'
import {
  BackgroundImg,
  Title,
  TestimoniesWrapper,
  Container,
  Form,
  Center,
  StyledButton
} from '../styles/Styles'

const StyledInputLabel = styled(InputLabel)`
  margin: 20px 0;
  text-transform: uppercase;
  text-align: left;
`

// to do
// - fix camel/not-camel toe
// empty radio buttons after submitting - not working

// _________Testimony POST
export const Share = () => {
  const TITLE = 'Share'

  const [name, setName] = useState('')
  const [when_weeks, setWhen_weeks] = useState('')
  const [when_weeks_noticed, setWhen_weeks_noticed] = useState('')
  const [physical_pain, setPhysical_pain] = useState(null)
  const [mental_pain, setMental_pain] = useState(null)
  const [hospital, setHospital] = useState(null)
  const [period_volume, setPeriod_volume] = useState(null)
  const [period_length, setPeriod_length] = useState(null)
  const [period_pain, setPeriod_pain] = useState(null)
  const [story, setStory] = useState('')
  const [testimonyOK, setTestimonyOK] = useState(false)
  const [testimonyFail, setTestimonyFail] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(importTestimonies, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        story,
        when_weeks,
        when_weeks_noticed,
        physical_pain,
        mental_pain,
        hospital,
        period_volume,
        period_length,
        period_pain
      })
    })
      .then((res) => {
        setName('')
        setWhen_weeks('')
        setWhen_weeks_noticed('')
        setPhysical_pain('')
        setMental_pain('')
        setHospital('')
        setPeriod_volume('')
        setPeriod_length('')
        setPeriod_pain('')
        setStory('')
        if (res.status === 201) {
          console.log(res.json)
          setTestimonyOK(true)
          setTestimonyFail(false)
          return res.json()
        } else {
          setTestimonyOK(false)
          setTestimonyFail(true)
          throw new Error(res.status)
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <TestimoniesWrapper>
        <Container>
          <Title>Share a testimony</Title>
          <BackgroundImg>
            <Form onSubmit={(event) => event.preventDefault()}>
              <TextField
                size="medium"
                required
                id="name"
                label="NAME/ALIAS"
                margin="normal"
                value={name}
                onChange={(event) => setName(event.target.value)} />
              <StyledInputLabel required id="when-miscarriage">When did you have your miscarriage?</StyledInputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                required
                value={when_weeks}
                onChange={(event) => setWhen_weeks(event.target.value)}>
                <MenuItem value={6}>Week 6</MenuItem>
                <MenuItem value={7}>Week 7</MenuItem>
                <MenuItem value={8}>Week 8</MenuItem>
                <MenuItem value={9}>Week 9</MenuItem>
                <MenuItem value={10}>Week 10</MenuItem>
                <MenuItem value={11}>Week 11</MenuItem>
                <MenuItem value={12}>Week 12</MenuItem>
                <MenuItem value={13}>Week 13</MenuItem>
                <MenuItem value={14}>Week 14</MenuItem>
                <MenuItem value={15}>Week 15</MenuItem>
                <MenuItem value={16}>Week 16</MenuItem>
                <MenuItem value={17}>Week 17</MenuItem>
                <MenuItem value={18}>Week 18</MenuItem>
                <MenuItem value={19}>Week 19</MenuItem>
                <MenuItem value={20}>Week 20</MenuItem>
                <MenuItem value={99}>Unknown</MenuItem>
              </Select>
              <StyledInputLabel required id="when-noticed">When did you notice your miscarriage?</StyledInputLabel>
              <Select
                labelId="noticed"
                id="noticed"
                required
                value={when_weeks_noticed}
                onChange={(event) => setWhen_weeks_noticed(event.target.value)}>
                <MenuItem value={6}>Week 6</MenuItem>
                <MenuItem value={7}>Week 7</MenuItem>
                <MenuItem value={8}>Week 8</MenuItem>
                <MenuItem value={9}>Week 9</MenuItem>
                <MenuItem value={10}>Week 10</MenuItem>
                <MenuItem value={11}>Week 11</MenuItem>
                <MenuItem value={12}>Week 12</MenuItem>
                <MenuItem value={13}>Week 13</MenuItem>
                <MenuItem value={14}>Week 14</MenuItem>
                <MenuItem value={15}>Week 15</MenuItem>
                <MenuItem value={16}>Week 16</MenuItem>
                <MenuItem value={17}>Week 17</MenuItem>
                <MenuItem value={18}>Week 18</MenuItem>
                <MenuItem value={19}>Week 19</MenuItem>
                <MenuItem value={20}>Week 20</MenuItem>
                <MenuItem value={21}>Week 21</MenuItem>
                <MenuItem value={22}>Week 22</MenuItem>
                <MenuItem value={23}>Week 23</MenuItem>
                <MenuItem value={24}>Week 24</MenuItem>
                <MenuItem value={99}>Unknown</MenuItem>
              </Select>
              <StyledInputLabel required id="physical-pain" component="legend">Describe your experienced physical pain level</StyledInputLabel>
              <Center>
                <RadioGroup row aria-label="physical-pain-radio" name="physical-pain-radio" defaultValue="bottom">
                  <FormControlLabel
                    value="Painless"
                    control={<Radio color="default" />}
                    label="Painless"
                    labelPlacement="bottom"
                    onChange={(event) => setPhysical_pain(event.target.value)} />
                  <FormControlLabel
                    value="Painful"
                    control={<Radio color="default" />}
                    label="Painful"
                    labelPlacement="bottom"
                    onChange={(event) => setPhysical_pain(event.target.value)} />
                  <FormControlLabel
                    value="Severe Pain"
                    control={<Radio color="default" />}
                    label="Severe Pain"
                    labelPlacement="bottom"
                    onChange={(event) => setPhysical_pain(event.target.value)} />
                </RadioGroup>
              </Center>
              <StyledInputLabel required id="mental-pain" component="legend">And your experienced mental pain level?</StyledInputLabel>
              <Center>
                <RadioGroup row aria-label="mental-pain-radio" name="mental-pain-radio" defaultValue="top">
                  <FormControlLabel
                    value="Painless"
                    control={<Radio color="default" />}
                    label="Painless"
                    labelPlacement="bottom"
                    onChange={(event) => setMental_pain(event.target.value)} />
                  <FormControlLabel
                    value="Painful"
                    control={<Radio color="default" />}
                    label="Painful"
                    labelPlacement="bottom"
                    onChange={(event) => setMental_pain(event.target.value)} />
                  <FormControlLabel
                    value="Severe Pain"
                    control={<Radio color="default" />}
                    label="Severe Pain"
                    labelPlacement="bottom"
                    onChange={(event) => setMental_pain(event.target.value)} />
                </RadioGroup>
              </Center>
              <StyledInputLabel required id="help-hospital" component="legend">Did you get help from the hospital?</StyledInputLabel>
              <Center>
                <RadioGroup row aria-label="hospital-help" name="hospital-help" defaultValue="top">
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="default" />}
                    label="Yes"
                    labelPlacement="bottom"
                    onChange={(event) => setHospital(event.target.value)} />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="default" />}
                    label="No"
                    labelPlacement="bottom"
                    onChange={(event) => setHospital(event.target.value)} />
                </RadioGroup>
              </Center>
              <StyledInputLabel required id="period-volume" component="legend">How was your period volume effected?</StyledInputLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Increased"
                  control={<Radio color="default" />}
                  label="Increased"
                  onChange={(event) => setPeriod_volume(event.target.value)} />
                <FormControlLabel
                  value="Decreased"
                  control={<Radio color="default" />}
                  label="Decreased"
                  onChange={(event) => setPeriod_volume(event.target.value)} />
                <FormControlLabel
                  value="Unchanged"
                  control={<Radio color="default" />}
                  label="Unchanged"
                  onChange={(event) => setPeriod_volume(event.target.value)} />
                <FormControlLabel
                  value="Don't know yet"
                  control={<Radio color="default" />}
                  label="Don't know yet"
                  onChange={(event) => setPeriod_volume(event.target.value)} />
              </RadioGroup>
              <StyledInputLabel required id="period-length" component="legend">Your period length?</StyledInputLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Additional days"
                  control={<Radio color="default" />}
                  label="Additional days"
                  onChange={(event) => setPeriod_length(event.target.value)} />
                <FormControlLabel
                  value="Fewer days"
                  control={<Radio color="default" />}
                  label="Fewer days"
                  onChange={(event) => setPeriod_length(event.target.value)} />
                <FormControlLabel
                  value="Unchanged"
                  control={<Radio color="default" />}
                  label="Unchanged"
                  onChange={(event) => setPeriod_length(event.target.value)} />
                <FormControlLabel
                  value="Don't know yet"
                  control={<Radio color="default" />}
                  label="Don't know yet"
                  onChange={(event) => setPeriod_length(event.target.value)} />
              </RadioGroup>
              <StyledInputLabel required id="standard-required" component="legend">Your period length?</StyledInputLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Additional days"
                  control={<Radio color="default" />}
                  label="Additional days"
                  onChange={(event) => setPeriod_length(event.target.value)} />
                <FormControlLabel
                  value="Fewer days"
                  control={<Radio color="default" />}
                  label="Fewer days"
                  onChange={(event) => setPeriod_length(event.target.value)} />
                <FormControlLabel
                  value="Unchanged"
                  control={<Radio color="default" />}
                  label="Unchanged"
                  onChange={(event) => setPeriod_length(event.target.value)} />
                <FormControlLabel
                  value="Don't know yet"
                  control={<Radio color="default" />}
                  label="Don't know yet"
                  onChange={(event) => setPeriod_length(event.target.value)} />
              </RadioGroup>
              <StyledInputLabel required id="standard-required" component="legend">And your period pain?</StyledInputLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Increased"
                  control={<Radio color="default" />}
                  label="Increased"
                  onChange={(event) => setPeriod_pain(event.target.value)} />
                <FormControlLabel
                  value="Decreased"
                  control={<Radio color="default" />}
                  label="Decreased"
                  onChange={(event) => setPeriod_pain(event.target.value)} />
                <FormControlLabel
                  value="Unchanged"
                  control={<Radio color="default" />}
                  label="Unchanged"
                  onChange={(event) => setPeriod_pain(event.target.value)} />
                <FormControlLabel
                  value="Don't know yet"
                  control={<Radio color="default" />}
                  label="Don't know yet"
                  onChange={(event) => setPeriod_pain(event.target.value)} />
              </RadioGroup>
              <TextField
                placeholder="Share your miscarriage testimony in more detail here..."
                multiline={true}
                margin="normal"
                variant="outlined"
                autoComplete="on"
                rows={40}
                rowsMax={10}
                value={story}
                onChange={(event) => setStory(event.target.value)} />
              <StyledButton
                type="submit"
                onClick={handleSubmit}
                disabled={!name || !when_weeks || !when_weeks_noticed || !physical_pain ||
                  !mental_pain || !hospital || !period_volume || !period_length || !period_pain
                  || !story}>
                Submit
              </StyledButton>
              {testimonyFail && (
                <Alert severity="error"><AlertTitle>Error</AlertTitle>Could not send testimony</Alert>
              )}
              {testimonyOK && (
                <Alert severity="success">Thank you for sharing! Your testimony will be published after it’s been reviewed.</Alert>
              )}
            </Form>
          </BackgroundImg>
        </Container>
      </TestimoniesWrapper>
    </>
  )
}