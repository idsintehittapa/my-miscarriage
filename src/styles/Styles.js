import styled from 'styled-components/macro'

import img from '../assets/usgs-eFbxYl9M_lc-unsplash.jpg'

// _________Reusable styles
export const Container = styled.section`
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
`

export const H2 = styled.h2`
  // font-size: 2em;
  // text-align: center;
`

export const Quote = styled.q`
  // font-size: 1.8em;
  // text-align: center;
  // font-style: oblique;
`
export const P = styled.p`
text-align: justify;
`

export const H4 = styled(P)`
`

// _________Header

export const Title = styled.h2`
  font-size: 2.8em;
`

// _________StarterPage

export const Test = styled.section`
  background: linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url(${img});
  // background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
`
export const TitleStarterPage = styled.h1`
  font-size: 3.5em;
  text-align: center;
`

export const StarterWrapper = styled.section`
display: flex;
min-height: 176vh;
flex-direction: column;
justify-content: space-between;
`
// _________ABOUT
export const ContainerText = styled(Container)`
  max-width: 800px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  // background-color: coral;
`

export const StyledNameInput = styled.input`
  width: 200px;
`
export const Paragraph = styled.p`
  font-weight: 900
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
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0 8px 0 8px;
  box-sizing: content-box;
  -webkit-font-smoothing: antialiased;
  font-size: .875em;
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
// _________Testimonies
export const GridLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (min-width: 1224px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const GridLayoutSmall = styled.section`
display: grid;
grid-template-columns: 1fr repeat(5, 1fr);
`