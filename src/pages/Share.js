import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core'

import styled from 'styled-components/macro'

import { sendShare } from '../paths/Api-paths'
import {
  Container,
  Form,
  // StyledNameInput,
  // StyledSelectInput,
  StyledButton
} from '../styles/Styles'

const StyledInputLabel = styled(InputLabel)`
  margin: 10px 0 15px 0;
  // font-size: 1.1em;
  // color: black;
  // font-weight: 500;
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
  const [testimonyOK, setTestimonyOK] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(sendShare, {
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
          return res.json()
        } else {
          setTestimonyOK(false)
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
      <Container>
        <h2>This is the sharing part</h2>
        <Form onSubmit={(event) => event.preventDefault()}>
          {/* not sure if this onSubmit is necessary */}
          <TextField
            size="medium"
            required id="standard-required"
            label="Name/Alias"
            // inputProps={minimumNameLength}
            value={name}
            onChange={(event) => setName(event.target.value)} />
          <StyledInputLabel required id="standard-required">When did you have your miscarriage?</StyledInputLabel>
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
          <StyledInputLabel required id="standard-required">When did you notice your miscarriage?</StyledInputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
          <div>
            <StyledInputLabel required id="standard-required" component="legend">Describe your experienced physical pain level</StyledInputLabel>
            <RadioGroup>
              <FormControlLabel
                value="Painless"
                control={<Radio color="default" />}
                label="Painless"
                onChange={(event) => setPhysical_pain(event.target.value)} />
              <FormControlLabel
                value="Painful"
                control={<Radio color="default" />}
                label="Painful"
                onChange={(event) => setPhysical_pain(event.target.value)} />
              <FormControlLabel
                value="Severe Pain"
                control={<Radio color="default" />}
                label="Severe Pain"
                onChange={(event) => setPhysical_pain(event.target.value)} />
            </RadioGroup>
            <StyledInputLabel required id="standard-required" component="legend">And your experienced mental pain level?</StyledInputLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
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
            {/* <Paragraph>Experienced  Mental Pain level:</Paragraph> */}
            <StyledInputLabel required id="standard-required" component="legend">Did you get help from the hospital?</StyledInputLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
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
          </div>

          <StyledInputLabel required id="standard-required" component="legend">How was your period volume effected?</StyledInputLabel>
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
          {!testimonyOK && (
            <p>Could not send testimony</p>
          )}
          {/* {testimonyOK && (
            <p>Thank you!</p>
          )} */}
        </Form>
      </Container>
    </>
  )
}