import React, { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem
} from '@material-ui/core'

import {
  HeaderContainer,
  PlusMenu,
  Nav,
  Ul,
  Li,
  StyledLink
} from '../styles/Styles'

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <PlusMenu>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          +
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleClose}><StyledLink to="/">Home</StyledLink></MenuItem>
          <MenuItem onClick={handleClose}><StyledLink to="/testimonies">Testimonies</StyledLink></MenuItem>
          <MenuItem onClick={handleClose}><StyledLink to="/share">Share</StyledLink></MenuItem>
          <MenuItem onClick={handleClose}><StyledLink to="/contact">Contact</StyledLink></MenuItem>
          <MenuItem onClick={handleClose}><StyledLink to="/moderator">Moderator</StyledLink></MenuItem>
        </Menu>
      </PlusMenu>
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