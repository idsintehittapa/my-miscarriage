import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { Card } from '../lib/Card'
import { GridLayout } from '../styles/Styles'

export const TestimoniesModerator = () => {
  const [post, setPost] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    // the right posts - filter later
    // fetch(`http://localhost:8080/testimonies?status=${post}`)
    fetch('http://localhost:8080/testimonies?post=pending')
      .then((response) => response.json())
      .then((json) => setPost(json.allTestimonies))
  }, [page])

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
      <GridLayout>
        {post.map((weeks, key) => (
          <Card
            key={key}
            title={weeks.when_weeks}
            createdAt={weeks.createdAt}
            secondaryText={`By ${weeks.name}`}
            story={weeks.story}
            post={`Status: ${weeks.post}`} />
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