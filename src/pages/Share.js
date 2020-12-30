import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: coral;
`

const StyledNameInput = styled.input`
  width: 200px;
`

const StyledSelectInput = styled.select`
  width: 210px;
`

const StyledTextArea = styled.textarea`
  width: 350px;
  height: 300px;
  margin-bottom: 20px;
`
// check this later https://material.io/components/buttons#text-button
const StyledButton = styled.button`
  font-family: Roboto, sans-serif;
  width: 64px;
  height: 44px;
  // position: absolute;
  overflow: hidden;   // what does overflow mean?
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0 8px 0 8px;
  box-sizing: content-box;
  -webkit-font-smoothing: antialiased;
  font-size: .875rem;
  font-weight: 500;
  letter-spacing: .0892857143em;
  text-transform: uppercase;
  justify-content: center;
  line-height: inherit;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  text-indent: 0px;
  text-shadow: none;
  text-align: center;
  cursor: default;
  box-shadow: 5px 5px 2px black;
`

export const Share = () => {
  return (
    <Container>
      <h2>This is the sharing part</h2>
      <Form>
        <label for="name"> Your name/alias</label>
        <StyledNameInput
          type="text">
        </StyledNameInput>
        <label for="weeks"> weeks</label>
        <StyledSelectInput id="weeks" name="weeks ">
          <option value="week 6">Week 6</option>
          <option value="week 7">Week 7</option>
          <option value="week 8">Week 8</option>
          <option value="week 9">Week 9</option>
          <option value="week 10">Week 10</option>
          <option value="week 11">Week 11</option>
          <option value="week 12">Week 12</option>
        </StyledSelectInput>
        <p>Experienced Physical Painlevel:</p>
        <label>
          <input type="radio" name="editList" value="Painless" /> Painless
        </label>
        <label>
          <input type="radio" name="editList" value="painful" /> Painful
        </label>
        <label>
          <input type="radio" name="editList" value="severepain" /> Severe Pain
        </label>
        <p>Experienced  Mental Pain level:</p>
        <input type="range" list="tickmarks"></input>
        <datalist id="tickmarks">
          <option value="0" label="Painless"></option>
          <option value="50" label="Pain"></option>
          <option value="100" label="Very painful"></option>
        </datalist>
        <p>Did you get help from the hosptial?</p>
        <label>
          <input type="radio" name="editList" value="yes" /> Yes
        </label>
        <label>
          <input type="radio" name="editList" value="No" /> No
        </label>
        <p>Did your period pain change after the miscarriage?</p>
        <label>
          <input type="radio" name="editList" value="yes" /> Yes
        </label>
        <label>
          <input type="radio" name="editList" value="No" /> No
        </label>
        <p>Did your period change after the miscarriage?</p>
        <label>
          <input type="radio" name="editList" value="increased" /> Increased
        </label>
        <label>
          <input type="radio" name="editList" value="Decreased" /> Decreased
        </label>
        <label>
          <input type="radio" name="editList" value="Unchanged" /> Unchanged
        </label>
      <label for="message"></label>
      <p>Wanna tell us your story?</p>
      <StyledTextArea placeholder="Share your miscarriage testimony in more detail here..."></StyledTextArea>
      <StyledButton
      type='submit'>
        Share!
      </StyledButton>
      </Form>
    </Container>
  )
}