import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import img from '../assets/1.jpg'
import imgDetail from '../assets/2.jpg'
import { ReactComponent as Icon } from '../assets/X.svg'

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

export const HeaderContainer = styled.header`
  display: flex;
`

export const PlusMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
}
`

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
}
`

export const Ul = styled.ul`
  padding: 0;
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  font-size: 1.1em;
`

export const Li = styled.li`
  padding-left: 16px; 

`

export const StyledLink = styled(Link)`
text-decoration: none;

  &:hover, &:focus {
    background: #4dbfed;
    cursor: pointer;
  }

  &:visited, &:link, &:active {
    color: #000
}
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
  margin: 30px 0 40px 0;
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

// _________TestimonyDetails

export const Svg = styled(Icon)`
  width: 24px; 
  height: 24px;
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 10px 50px 0;
`
export const DetailWrapper = styled.section`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
`
export const Details = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14),
  0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px; 
  background: rgba(255, 255, 255, 0.9);
  margin: 100px 0 0 0;
  padding: 20px;
  max-width: 1000px;
  width: 500px;
`
export const Background = styled.div`
  background: linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url(${imgDetail});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const DetailsTitle = styled.h2`
  font-size: 1.6em;
  text-align: center;
  text-transform: uppercase;
`
export const CreatedAt = styled.p`
  font-size: 0.8em;
  color: rgba(67, 67, 67, 0.8)
`

export const Question = styled.p`
  text-align: left
`

export const Answer = styled.p`
  text-align: end;
`

export const WrapperAnswer = styled.div`
  text-align: end;
  border-radius: 25px;
  background: #73AD21;
  padding: 20px;
  width: 200px;
  height: auto;
`

// _________Moderator
export const SignOutWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 20px 0 0;
`

// _________ModeratorInspect
export const BackgroundMentor = styled.div`
  background: linear-gradient(rgba(95,22,2,.2), rgba(2,255,255,.2)), url(${imgDetail});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`