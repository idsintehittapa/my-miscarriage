import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

// Q: How making this update not inside the header? - check damien's video
// it does so if you go into the path directly but not when clicking on links..
// is it because it's outside of main

const HeaderContainer = styled.header`
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
  position: -webkit-sticky;
  position: sticky;

  @media (min-width: 768px) {
    display: flex;
}
`

const Ul = styled.ul`
  padding: 0;
  margin: 20px;
  list-style-type: none;
`

const Li = styled.li`
  padding-left: 16px; 

`

const StyledLink = styled(Link)`
text-decoration: none;

  &:hover, &:focus {
    background: #4dbfed;
    cursor: pointer;
  }

  &:visited, &:link, &:active {
    color: #000
}
`

export const Header = () => {
  return (
    <HeaderContainer>
      <PlusMenu>+</PlusMenu>
      <Nav>
        <Ul>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/testimonies">Testimonies</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/share">Share</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/contact">Contact</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/moderator">Moderator</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  )
}