import React, { useEffect, useState } from 'react'
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import moment from 'moment'
import { useParams, useHistory } from 'react-router-dom'

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
  CreatedAt
} from '../styles/Styles'

export const ModeratorInspect = () => {
  const [testimony, setTestimony] = useState([])
  const [name, setName] = useState('')
  const [story, setStory] = useState('')
  const [post, setPost] = useState('')
  const { id } = useParams()

  const history = useHistory()

  // what happens after post has changed status
  // where do I go then?

  const tokenFromStorage = () => window.localStorage.getItem('tokenAuth') || ''

  useEffect(() => {
    // I guess I have to change this later to the authenticated version - maybe?
    fetch(`http://localhost:8080/moderator/pending/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: tokenFromStorage() }
    })
      .then((response) => {
        if (!response.ok) {
          history.push('/moderator')
        }
        return response.json()
      })
      .then((json) => {
        setName(json.name)
        setStory(json.story)
        setStory(json.post)
        setTestimony(json)
        // eslint-disable-next-line
      })
  }, [id, history])
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
                <TextField
                  value={name}
                  onChange={(event) => setName(event.target.value)} />
                <TextField
                  size="medium"
                  rows={40}
                  rowsMax={10}
                  value={story}
                  onChange={(event) => setStory(event.target.value)} />
                {/* // 'pending', 'approved', 'decline' */}
              </Form>

            </Details>
          </Container>
        </DetailWrapper>
      </BackgroundMentor>
    </>
  )
}