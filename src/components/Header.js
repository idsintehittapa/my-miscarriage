import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { StartPage } from 'pages/StartPage'
import { About } from '../pages/About'
import { Share } from '../pages/Share'

// Q: How making this update not inside the header? - check damien's video
// it does so if you go into the path directly but not when clicking on links..
// is it because it's outside of main

const Container = styled.header`
`

const PlusMenu = styled.div`
  font-size: 1.5em;
  margin: 15px;

  @media (min-width: 768px) {
    display: none;
}
`

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
}
`

const Ul = styled.ul`
  padding: 0;
  margin: 20px;
`

const Li = styled.ul`
padding-left: 16px; 
`

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover, &:focus {
    background: #4dbfed;
    cursor: pointer;
  }

  &:visited, &:link, &:active {
    text-decoration: none;
    color: #000
}
`

export const Header = () => {
  return (
    <Container>
    <Router>
    <PlusMenu>+</PlusMenu>
      <Nav>
        <Ul>
          <Li>
            <StyledLink to="/about">About</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/share">Share</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
        </Ul>
      </Nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/share">
          <Share />
        </Route>
        <Route exact path="/">
          <StartPage />
        </Route>
      </Switch>
  </Router>
  </Container>
)
}