import React, { useEffect, useState } from 'react'
import {
  Link,
  useParams,
  useHistory
} from 'react-router-dom'
import moment from 'moment'
import { Alert } from '@material-ui/lab'
import { TextField, Select, MenuItem } from '@material-ui/core'

import {
  Form,
  DetailWrapper,
  IconWrapper,
  Container,
  Svg,
  Details,
  BackgroundModerator,
  P,
  DetailsTitle,
  CreatedAt,
  StyledButton
} from '../styles/Styles'
import { moderatorTestimonies } from '../paths/Api-paths'

export const ModeratorInspect = () => {
  const [updateOk, setUpdateOk] = useState(false)
  const [testimony, setTestimony] = useState([])
  const [name, setName] = useState('')
  const [story, setStory] = useState('')
  const [post, setPost] = useState('')
  const { id } = useParams()

  const history = useHistory()

  const tokenFromStorage = () => window.localStorage.getItem('tokenAuth') || ''

  const handleSubmit = () => {
    fetch(`${moderatorTestimonies}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name,
        story,
        post
      }),
      headers: { 'Content-Type': 'application/json', Authorization: tokenFromStorage() }
    })
      .then((response) => {
        if (response.status === 200) {
          setUpdateOk(true)
          return response.json()
        } else {
          setUpdateOk(false)
          throw new Error(response.status)
        }
      })
  }

  useEffect(() => {
    fetch(`${moderatorTestimonies}/${id}`, {
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
        setPost(json.post)
        setTestimony(json)
      })
  }, [id, history])

  return (
    <>
      <BackgroundModerator>
        <DetailWrapper>
          <Container>
            <Details>
              <IconWrapper>
                <Link to="/moderator/posts">
                  <Svg />
                </Link>
              </IconWrapper>
              <DetailsTitle>{`${testimony.name}'s testimony`}</DetailsTitle>
              <CreatedAt>{moment(testimony.createdAt).format('ll')}</CreatedAt>
              <Form onSubmit={(event) => event.preventDefault()}>
                <P>
                  The name:
                </P>
                <TextField
                  value={name}
                  onChange={(event) => setName(event.target.value)} />
                <P>
                  The story:
                </P>
                <TextField
                  value={story}
                  margin="normal"
                  variant="outlined"
                  autoComplete="on"
                  multiline
                  rows={3}
                  onChange={(event) => setStory(event.target.value)} />
                <P>
                  Change status:
                </P>
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
                {updateOk && (
                  <Alert severity="success">Successfully updated!</Alert>
                )}
              </Form>
            </Details>
          </Container>
        </DetailWrapper>
      </BackgroundModerator>
    </>
  )
}