
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'

import { importTestimonies } from '../paths/Api-paths'
import { Carousel } from '../components/Carousel'
import { Card } from '../lib/Card'

import {
  BackgroundImgTestimony,
  Container,
  TestimoniesWrapper,
  GridLayout,
  Title
} from '../styles/Styles'

// opening a card to read it!

export const TestimonyWeek = () => {
  const [testimony, setTestimony] = useState([])
  const [page, setPage] = useState(1)

  const { week } = useParams()

  useEffect(() => {
    // fetch(`http://localhost:8080/testimonies?when_weeks=${week}&post=approved`)
    fetch(`${importTestimonies}?when_weeks=${week}&post=approved`)
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
          {/* // check this */}
          <Title> Week {week === 99 ? 'Unknown' : week} </Title>
          <BackgroundImgTestimony>
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
          </BackgroundImgTestimony>
        </Container>
      </TestimoniesWrapper>
      <Carousel />
    </>
  )
}