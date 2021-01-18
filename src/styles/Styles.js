import styled from 'styled-components/macro'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  // background-color: coral;
`

export const StyledNameInput = styled.input`
  width: 200px;
`

export const StyledSelectInput = styled.select`
  width: 210px;
`

export const StyledTextArea = styled.textarea`
  width: 350px;
  height: 300px;
  margin-bottom: 20px;
`
// check this later https://material.io/components/buttons#text-button
export const StyledButton = styled.button`
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
