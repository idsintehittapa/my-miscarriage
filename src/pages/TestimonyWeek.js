
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { Link } from 'react-router-dom'

// import { importTestimonies } from '../paths/Api-paths'
import { Carousel } from '../components/Carousel'
import { Card } from '../lib/Card'

import {
  Container,
  TestimoniesWrapper,
  GridLayout,
  Title
} from '../styles/Styles'

// opening a card to read it!

export const TestimonyWeek = (request) => {
  const [testimony, setTestimony] = useState([])
  const [page, setPage] = useState(1)

  const { week } = request.match.params

  useEffect(() => {
    fetch(`http://localhost:8080/testimonies?when_weeks=${week}&post=approved`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else throw new Error('Unable to show testimonies')
      })
      .then((json) => setTestimony(json.allTestimonies))
  }, [week])

  const pageForward = () => {
    setPage(page + 1)
  }

  const pageBackward = () => {
    setPage(page - 1)
  }
  return (
    <>
      <TestimoniesWrapper>
        <Container>
          <Title> Week {week} </Title>
          <GridLayout>
            {testimony.map((weeks, key) => (
              <Link key={key} to={`/testimonies/week/${weeks.when_weeks}/${weeks._id}`}>
                <Card
                  key={key}
                  detailTitle={`${weeks.name}'s testimony`}
                  createdAt={moment(weeks.createdAt).format('ll')}
                  story={weeks.story} />
              </Link>
            ))}
          </GridLayout>
          <div>
            <p>{`Page ${page} / ${page}`}</p>
            <button type="button" onClick={pageBackward} disabled={page === 1}>Previous Page</button>
            <button type="button" onClick={pageForward} disabled={page === 10}>Next Page</button>
          </div>
          <h3>Jump to another Week of testimonies</h3>
        </Container>
      </TestimoniesWrapper>
      <Carousel />
    </>
  )
}