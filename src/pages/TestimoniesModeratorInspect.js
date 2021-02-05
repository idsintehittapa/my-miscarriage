import React, { useEffect, useState } from 'react'
import {
  Route,
  Link,
  useParams,
  useHistory
} from 'react-router-dom'
import moment from 'moment'
// import { useParams, useHistory } from 'react-router-dom'

import { TextField, Select, MenuItem } from '@material-ui/core';

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
  StyledButton
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

  const handleSubmit = () => {
    // eslint-disable-next-line
    fetch(`http://localhost:8080/moderator/pending/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({
        name,
        story,
        post
      }),
      headers: { 'Content-Type': 'application/json', Authorization: tokenFromStorage() }
    }
      .then((response) => {
        // setName('')
        // setStory('')
        // setPost('')
        if (response.status === 200) {
          console.log(response.json)
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
  }

  useEffect(() => {
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
      })
  }, [id, history])

  return (
    <>
      <BackgroundMentor>
        <DetailWrapper>
          <Container>
            <Details>
              <IconWrapper>
                {/* // this is not working */}
                <Route path="/moderator/posts/:id">
                  <Link to="/moderator/pending">
                    <Svg />
                  </Link>
                </Route>
              </IconWrapper>
              <DetailsTitle>{`${testimony.name}'s testimony`}</DetailsTitle>
              <CreatedAt>{moment(testimony.createdAt).format('ll')}</CreatedAt>
              <Form onSubmit={(event) => event.preventDefault()}>
                {/* not sure if this onSubmit is necessary */}
                <div>
                  The name:
                </div>
                <TextField
                  value={name}
                  onChange={(event) => setName(event.target.value)} />
                <div>
                  The story:
                </div>
                <TextField
                  size="medium"
                  rows={40}
                  rowsMax={10}
                  value={story}
                  onChange={(event) => setStory(event.target.value)} />
                <div>
                  Change status:
                </div>
                <Select
                  labelId="status"
                  id="status"
                  value={post}
                  onChange={(event) => setPost(event.target.value)}>
                  <MenuItem value="pending">pending</MenuItem>
                  <MenuItem value="approved">approved</MenuItem>
                  <MenuItem value="decline">decline</MenuItem>
                </Select>
                <StyledButton
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!post}>
                  send
                </StyledButton>

              </Form>
            </Details>
          </Container>
        </DetailWrapper>
      </BackgroundMentor>
    </>
  )
}