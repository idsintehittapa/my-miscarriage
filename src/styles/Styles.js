import styled, { keyframes } from 'styled-components/macro'
import { Link } from 'react-router-dom'

import img from '../assets/rflow.png'
import imgDetail from '../assets/2.jpg'
import imgTestimonyWeek from '../assets/RorschachTest.jpg'
import { ReactComponent as Icon } from '../assets/X.svg'

// _________Reusable styles
export const Container = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
`
export const TestimoniesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const H2 = styled.h2`
  text-transform: uppercase;
  font-family: 'Roboto';
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 2em;
}
`
export const H3 = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.7em;
}
`
export const H4 = styled.h4`
  font-family: 'Roboto Mono', monospace;
  padding: 20px;
  text-align: justify;
  font-weight: 500;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.4em;
}
`
export const Quote = styled.q`
  font-family: 'BLACK BRUSH'; 
  font-size: 1.5em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.7em;
  }

  @media (min-width: 1224px) {
    font-size: 2em;
  }
`
export const P = styled.p`
  font-size: 1.2em;
  text-align: left;
  line-height: 1.2;
  letter-spacing: 2px;
  padding: 10px;
  margin: 10px 0 0 0;
`
export const PageWrapper = styled.div`
  display: flex;
`
export const LoadingSpinner = styled.div`
  border: 1.3em solid;
  border-radius: 50%;
  border-top: 1.56em solid #fff;
  width: 8.750em;
  height: 8.750em;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

// _________Header
export const Title = styled.h2`
  font-family: 'Ostrich Sans Sans Black';
  font-size: 2.8em;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3.8em;
}
`
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
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
  padding: 0px 16px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto Mono', monospace;
  color: #000;

  @media (min-width: 768px) {
    font-size: 1.2em;
  &:hover, &:focus {
    text-decoration: overline;
    text-decoration-thickness: 2px;
    color: #000;
    cursor: pointer;
  }

  &:active {
    text-decoration: overline;
    text-decoration-thickness: 2px;
    color: #000;
    padding: 5px;
}
@media (min-width: 1024px) {
  font-size: 1.3em;
}
`

// _________StarterPage
export const StartBackground = styled.section`
  background: linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
export const TitleStarterPage = styled.h1`
  font-family: 'Ostrich Sans Sans Black';
  font-size: 3.5em;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 4.5em;
}
`
export const StarterWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
`

// _________ABOUT
export const ContainerText = styled(Container)`
  max-width: 800px;
`
export const AboutMain = styled(Main)`
  height: auto;
`
export const AboutSubTitle = styled.p`
  font-family: 'Ostrich Sans Sans Black';
  margin: 50px 0 0 0;
  font-size: 1.5em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2em;
  }

  @media (min-width: 1224px) {
    font-size: 1.7em;
  }
`

// _________SHARE
export const BackgroundImg = styled.div`
  background: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.5)), url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 500px;
  padding: 30px;
`
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledButton = styled.button`
  font-family: 'Ostrich Sans Sans Black';
  margin: 30px 0 40px 0;
  width: auto;
  height: 38px;
  border-radius: 4px;
  border: none;
  padding: 0 8px 0 8px;
  box-sizing: content-box;
  font-size: .875em;
  font-weight: 500;
  letter-spacing: .1em;
  text-transform: uppercase;
  line-height: inherit;
  text-align: center;
  cursor: default;
  box-shadow: 1px 1px 2px black;
`

// _________Testimonies
export const BlackBackground = styled.div`
  background: rgba(25, 25, 25, 0.9);
  margin-top: 10px;
`
export const GridLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  min-height: 400px;
  min-width: 300px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (min-width: 1224px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

// _________TestimonyWeek
export const BackgroundImgTestimony = styled.div`
  // background: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.5)), url(${imgTestimonyWeek});
  background-image: url(${imgTestimonyWeek});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  margin: 0 auto;
`
export const Details = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14),
  0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px; 
  background: rgba(255, 255, 255, 0.9);
  margin: 100px 0 40px 0;
  padding: 20px;
  max-width: 1000px;
`
export const Background = styled.div`
  background: linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url(${imgDetail});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const DetailsTitle = styled.h2`
  font-size: 1.7em;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Ostrich Sans Sans Black';

  @media (min-width: 768px) {
    font-size: 2em;
}
`
export const CreatedAt = styled.p`
  font-size: 0.8em;
  color: rgba(67, 67, 67, 0.8)
`
export const Question = styled.p`
  text-align: left;
  font-size: 1em;
  color: rgba(25, 25, 25, 0.9);
  margin: 0 auto;
  letter-spacing: 2px;
`
export const Answer = styled.p`
  text-align: justify;
  font-size: 1em;
  letter-spacing: 2px;
  color: #F4F4F4;
  padding: 6px 10px;
  border-radius: 6px 0 6px 0;
  position: relative;
  background: rgba(25, 25, 25, 0.9);
`
export const AnswerHolder = styled.div`
width: 100%;
display: flex;
flex-flow: column;
align-items: flex-end;
`
export const ChatAnswer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, .05);
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  flex: 1;
`
export const QuestionHolder = styled.div`
  padding: 6px 10px;
  border-radius: 6px 0 6px 0;
  position: relative;
  background: rgba(160,132,78,0.9);
  border: 1px solid rgba(160,132,78,0.9);
`

// _________Sign
export const FormSign = styled.form`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
`
export const PSign = styled.p`
  font-family: 'Ostrich Sans Sans Medium';
  font-size: 1.7em;
  color: #000;

  @media (min-width: 768px) {
    font-size: 2em;
}
`
export const StyledLinkSign = styled(Link)`
  &:hover, &:focus {
    color: #000;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    cursor: pointer;
  }
`

// _________Contact
export const LogosWrapper = styled.div`
  display: flex;
`
const animation = keyframes`
  0% { top: -1.125em; }
  100% { top: -1.125em;}
  0% { top: -10px; }
  100% { top: -10px;}
`
export const ContactImg = styled.img`
  height: 40px;
  width: 40px;
  margin: 50px 10px;
  &:hover, &:focus {
    cursor: pointer;
    position: relative;
    animation: ${animation};
    animation-duration: 10s;
  }
`
export const A = styled.a`
  text-decoration: underline;
  color: #000;
  &:hover, &:focus {
    cursor: pointer;
  }
`

// _________ModeratorInspect
export const BackgroundModerator = styled.div`
  background: linear-gradient(rgba(95,22,2,.2), rgba(2,255,255,.2)), url(${imgDetail});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const SignOutWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 20px 0 0;
`

// _________Footer
export const FooterContainer = styled.footer`
  color: #F4F4F4;
  padding: 20px;
  position: absolute;
  background: rgba(25, 25, 25, 0.9);
  left:0;
  right:0;
`
export const FooterP = styled.p`
  font-size: 0.8em;
  text-align: center;
  line-height: 1.2;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    font-size: 1em;
}

@media (min-width: 1024px) {
  font-size: 0.8em;
}
`