import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import { useHistory, Link } from 'react-router-dom'

import { moderatorTestimonies } from '../paths/Api-paths'
import { Card } from '../lib/Card'
import { StyledButton, SignOutWrapper, GridLayout } from '../styles/Styles'

export const TestimoniesModerator = () => {
  const [post, setPost] = useState([])
  const [page, setPage] = useState(1)

  const history = useHistory()

  const handleSignOut = () => {
    localStorage.clear()
  }

  const tokenFromStorage = () => window.localStorage.getItem('tokenAuth') || ''

  useEffect(() => {
    fetch(moderatorTestimonies, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: tokenFromStorage() }
    })
      .then((response) => {
        if (!response.ok) {
          history.push('/moderator')
        }
        return response.json()
      })
      .then((json) => setPost(json))
  }, [page, history])

  const pageForward = () => {
    setPage(page + 1)
  }

  const pageBackward = () => {
    setPage(page - 1)
  }

  const TITLE = 'Posts'

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <SignOutWrapper>
        <p>Logged in as XX</p>
        <Link to="/moderator">
          <StyledButton
            type="submit"
            onClick={handleSignOut}>
            Sign out
          </StyledButton>
        </Link>
      </SignOutWrapper>
      <GridLayout>
        {post.map((weeks, key) => (
          // eslint-disable-next-line no-underscore-dangle
          <Link key={key} to={`/moderator/posts/${weeks._id}`}>
            <Card
              key={key}
              title={weeks.when_weeks}
              createdAt={moment(weeks.createdAt).format('ll')}
              secondaryText={`By: ${weeks.name}`}
              story={weeks.story}
              post={`Status: ${weeks.post}`} />
          </Link>
        ))}
      </GridLayout>
      <div className="page-buttons-container">
        <p>{`Page ${page} / ${page}`}</p>
        <button type="button" onClick={pageBackward} disabled={page === 1}>Previous Page</button>
        <button type="button" onClick={pageForward} disabled={page === 10}>Next Page</button>
      </div>
    </>
  )
}