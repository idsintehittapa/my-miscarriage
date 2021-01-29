import React, { useEffect, useState } from 'react'
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import moment from 'moment'
import { useParams } from 'react-router-dom'

import { TextField } from '@material-ui/core';

import {
  Form,
  DetailWrapper,
  IconWrapper,
  Container,
  Svg,
  Details,
  BackgroundMentor,
  DetailsTitle,
  CreatedAt,
} from '../styles/Styles'

export const ModeratorInspect = () => {
  const [testimony, setTestimony] = useState([])
  const { id } = useParams()

  // I don't have any if/throw error messages - I need to add that
  // Also I guess I need to add these?
  // fetch(SESSIONS_URL, {
  //   method: 'POST',
  //   body: JSON.stringify({ email, password }),
  //   headers: { 'Content-Type': 'application/json' },

  useEffect(() => {
    fetch(`http://localhost:8080/testimonies/${id}`)
      .then((response) => response.json())
      .then((json) => setTestimony(json))
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <BackgroundMentor>
        <DetailWrapper>
          <Container>
            <Details>
              <IconWrapper>
                {/* <Route path='/testimonies/week/:week/:id'>
              <Link to={`/testimonies/week/${testimony.when_weeks}`}> */}
                <Svg />
                {/* </Link>
              </Route> */}
              </IconWrapper>
              <DetailsTitle>{`${testimony.name}'s testimony`}</DetailsTitle>
              <CreatedAt>{moment(testimony.createdAt).format('ll')}</CreatedAt>
              <Form onSubmit={(event) => event.preventDefault()}>
                {/* not sure if this onSubmit is necessary */}
                <input
                  type="text"
                  defaultValue={`${testimony.name}' INPut value`} />
                <TextField
                  defaultValue={`${testimony.name}'s testimony`} />
                <TextField 
                  size="medium"
                  rows={40}
                  rowsMax={10}
                  defaultValue={testimony.story} />
                {/* // 'pending', 'approved', 'decline' */}
              </Form>

            </Details>
          </Container>
        </DetailWrapper>
      </BackgroundMentor>
    </>
  )
}
