import React, { useState } from 'react'
import { sendShare } from '../paths/Api-paths'

import {
  Container,
  Form,
  Paragraph,
  // StyledNameInput,
  // StyledSelectInput,
  StyledTextArea,
  StyledButton
} from '../styles/Styles'

// to do
// - fix camel/not-camel toe
// formik?
// .catch((error)
// empty radio buttons after submitting - not working

// _________Testimony POST
export const Share = () => {
  const [name, setName] = useState('')
  const [when_weeks, setWhen_weeks] = useState('')
  const [when_weeks_noticed, setWhen_weeks_noticed] = useState('')
  const [physical_pain, setPhysical_pain] = useState('')
  const [mental_pain, setMental_pain] = useState('')
  const [hospital, setHospital] = useState('')
  const [period_volume, setPeriod_volume] = useState('')
  const [period_length, setPeriod_length] = useState('')
  const [period_pain, setPeriod_pain] = useState('')
  const [story, setStory] = useState('')

  // a submit function witch POSTs the text input - this goes on the button
  const handleSubmit = (event) => {
    event.preventDefault()

    // send a POST request
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
        setName('') // this is stupid, it has to be a smarter way of doing this
        setWhen_weeks('') // mapping?
        setWhen_weeks_noticed('')
        setPhysical_pain('')
        setMental_pain('')
        setHospital('')
        setPeriod_volume('')
        setPeriod_length('')
        setPeriod_pain('')
        setStory('')
        // success
        if (res.status === 201) {
          console.log(res.json)
          return res.json()
          // fail
        } else throw new Error(res.status)
      })
      // _________This needs to be looked at
      .catch((error) => console.log(error))
    // .catch((error) => {
    //   error.json({ message: 'LOGIN_FAILED', errors: error })
    // })
  }

  return (
    <>
      <Container>
        <h2>This is the sharing part</h2>
        <Form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name"> Your name/alias</label>
          <input
            id="name"
            value={name}
            type="text"
            onChange={(event) => setName(event.target.value)} />
          <label htmlFor="weeks"> When weeks*</label>
          <select
            id="weeks"
            required
            value={when_weeks}
            onChange={(event) => setWhen_weeks(event.target.value)}>
            <option value="-">week</option>
            <option value="6">Week 6</option>
            <option value="7">Week 7</option>
            <option value="8">Week 8</option>
            <option value="9">Week 9</option>
            <option value="10">Week 10</option>
            <option value="11">Week 11</option>
            <option value="12">Week 12</option>
            <option value="13">Week 13</option>
            <option value="14">Week 14</option>
            <option value="15">Week 15</option>
            <option value="16">Week 16</option>
            <option value="17">Week 17</option>
            <option value="18">Week 18</option>
            <option value="19">Week 19</option>
            <option value="20">Week 20</option>
            <option value="5">I do not know</option>
          </select>
          <label htmlFor="weeks_noticed"> When noticed?</label>
          <select
            id="weeks_noticed"
            value={when_weeks_noticed}
            onChange={(event) => setWhen_weeks_noticed(event.target.value)}>
            <option value="-">week</option>
            <option value="6">Week 6</option>
            <option value="7">Week 7</option>
            <option value="8">Week 8</option>
            <option value="9">Week 9</option>
            <option value="10">Week 10</option>
            <option value="11">Week 11</option>
            <option value="12">Week 12</option>
            <option value="13">Week 13</option>
            <option value="14">Week 14</option>
            <option value="15">Week 15</option>
            <option value="16">Week 16</option>
            <option value="17">Week 17</option>
            <option value="18">Week 18</option>
            <option value="19">Week 19</option>
            <option value="20">Week 20</option>
            <option value="21">Week 21</option>
            <option value="22">Week 22</option>
            <option value="23">Week 23</option>
            <option value="24">Week 24</option>
            <option value="25">Week 25</option>
            <option value="5">I do not know</option>
          </select>
          <Paragraph>Experienced Physical Pain level:</Paragraph>
          <input
            type="radio"
            value="Painless"
            name="physical_pain"
            onChange={(event) => setPhysical_pain(event.target.value)} /> Painless
          <input
            type="radio"
            value="Painful"
            name="physical_pain"
            onChange={(event) => setPhysical_pain(event.target.value)} /> Painful
          <input
            type="radio"
            value="Severe Pain"
            name="physical_pain"
            onChange={(event) => setPhysical_pain(event.target.value)} /> Severe Pain
          <Paragraph>Experienced  Mental Pain level:</Paragraph>
          <input
            type="radio"
            value="Painless"
            name="mental_pain"
            onChange={(event) => setMental_pain(event.target.value)} /> Painless
          <input
            type="radio"
            value="Painful"
            name="mental_pain"
            onChange={(event) => setMental_pain(event.target.value)} /> Painful
          <input
            type="radio"
            value="Severe Pain"
            name="mental_pain"
            onChange={(event) => setMental_pain(event.target.value)} /> Severe Pain
          <Paragraph>Did you get help from the hospital?</Paragraph>
          <input
            type="radio"
            value="yes"
            name="hospital"
            onChange={(event) => setHospital(event.target.value)} /> Yes
          <input
            type="radio"
            value="no"
            name="hospital"
            onChange={(event) => setHospital(event.target.value)} /> No
          <Paragraph>Did the volume of your period change after the miscarriage?</Paragraph>
          <input
            type="radio"
            value="Increased"
            name="period_volume"
            onChange={(event) => setPeriod_volume(event.target.value)} /> Increased
          <input
            type="radio"
            value="Decreased"
            name="period_volume"
            onChange={(event) => setPeriod_volume(event.target.value)} />  Decreased
          <input
            type="radio"
            value="Unchanged"
            name="period_volume"
            onChange={(event) => setPeriod_volume(event.target.value)} /> Unchanged
          <Paragraph>Did your period length change after the miscarriage?</Paragraph>
          <input
            type="radio"
            value="Additional days"
            name="period_length"
            onChange={(event) => setPeriod_length(event.target.value)} /> Additional days
          <input
            type="radio"
            value="Fewer days"
            name="period_length"
            onChange={(event) => setPeriod_length(event.target.value)} /> Fewer days
          <input
            type="radio"
            value="Unchanged"
            name="period_length"
            onChange={(event) => setPeriod_length(event.target.value)} /> Unchanged
          <Paragraph>Did your period pain change after the miscarriage?</Paragraph>
          <input
            type="radio"
            value="yes"
            name="period_pain"
            onChange={(event) => setPeriod_pain(event.target.value)} /> Yes
          <input
            type="radio"
            value="no"
            name="period_pain"
            onChange={(event) => setPeriod_pain(event.target.value)} /> No
          <Paragraph>Wanna tell us your story?</Paragraph>
          <StyledTextArea
            value={story}
            onChange={(event) => setStory(event.target.value)}
            placeholder="Share your miscarriage testimony in more detail here..." />
          <StyledButton
            type="submit"
            onClick={handleSubmit}
            disabled={!when_weeks}>
            Submit
          </StyledButton>
        </Form>
      </Container>
    </>
  )
}