import React, { useState } from 'react'
import { sendShare } from '../paths/Api-paths'

// import {
//   Container,
//   Form,
//   StyledNameInput,
//   StyledSelectInput,
//   StyledTextArea,
//   StyledButton
// } from '../styles/Styles'

// _________Testimony POST
export const Share = () => {
  const [name, setName] = useState('')
  const [when_weeks, setWhen_weeks] = useState('')
  const [when_weeks_noticed, setWhen_weeks_noticed] = useState('')
  const [physical_pain, setPhysical_pain] = useState('')
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
        physical_pain })
    })
      .then((res) => {
        setName('') // this is stupid, it has to be a smarter way of doing this
        setWhen_weeks('') // mapping?
        setStory(null)
        console.log(res)
        // success
        if (res.status === 201) {
          console.log(res.json)
          return res.json()
          // fail
        } else throw new Error(res.status)
      })
      // _________This needs to be looked at
      .catch((error) => {
        console.log(error)
      })
        // error({ message: 'LOGIN_FAILED', errors: error })
        // )
      
    // .catch((error) => {
    //   error.json({ message: 'LOGIN_FAILED', errors: error })
    // })

  return (
    <>
      <main>
        <h2>This is the sharing part</h2>
        <form onSubmit={(event) => event.preventDefault()}>
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
          <p>Experienced Physical Pain level:</p>
          <input
            type="radio"
            value={physical_pain}
            onChange={(event) => setPhysical_pain(event.target.value)} /> Painless
          <input
            type="radio"
            value={physical_pain}
            onChange={(event) => setPhysical_pain(event.target.value)} /> Painful
          <input
            type="radio"
            value={physical_pain}
            onChange={(event) => setPhysical_pain(event.target.value)} /> Severe Pain
          {/* <p>Experienced  Mental Pain level:</p>
          <input type="range" list="tickmarks" />
          <datalist id="tickmarks">
            <option value="0" label="Painless" />
            <option value="50" label="Pain" />
            <option value="100" label="Very painful" />
          </datalist>
          <p>Did you get help from the hospital?</p>
          <label>
            <input type="radio" name="editList" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="editList" value="No" /> No
          </label>
          <p>Did the volume of your period change after the miscarriage?</p>
          <label>
            <input type="radio" name="editList" value="increased" /> Increased
          </label>
          <label>
            <input type="radio" name="editList" value="Decreased" /> Decreased
          </label>
          <label>
            <input type="radio" name="editList" value="Unchanged" /> Unchanged
          </label>
          <p>Did your period length change after the miscarriage?</p>
          <label>
            <input type="radio" name="editList" value="Fewer days" /> Fewer days
          </label>
          <label>
            <input type="radio" name="editList" value="Additional days" /> Additional days
          </label>
          <label>
            <input type="radio" name="editList" value="Unchanged" /> Unchanged
          </label>
          <p>Did your period pain change after the miscarriage?</p>
          <label>
            <input type="radio" name="editList" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="editList" value="No" /> No
          </label>
          <label htmlFor="message"></label> */} */} */}
          <p>Wanna tell us your story?</p>
          <textarea
            value={story}
            onChange={(event) => setStory(event.target.value)}
            placeholder="Share your miscarriage testimony in more detail here..." />
          <button
            disabled={!when_weeks}
            type="submit"
            onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </main>
    </>
  )
}