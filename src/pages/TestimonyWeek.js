
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'

import { importTestimonies } from '../paths/Api-paths'
import { Carousel } from '../components/Carousel'
import { Loading } from '../components/Loading'
import { Card } from '../lib/Card'
import {
  BackgroundImgTestimony,
  TestimoniesWrapper,
  Container,
  Title,
  GridLayout,
  PageWrapper,
  StyledButton,
  P
} from '../styles/Styles'

export const TestimonyWeek = () => {
  const [testimony, setTestimony] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const { week } = useParams()

  useEffect(() => {
    fetch(`${importTestimonies}?when_weeks=${week}&post=approved`)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false)
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
          <Title> Week {week === 99 ? 'Unknown' : week} </Title>
          <BackgroundImgTestimony>
            {loading && (
              <Loading />
            )}
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
            <Container>
              <PageWrapper>
                <StyledButton type="button" onClick={pageBackward} disabled={page === 1}>Previous Page</StyledButton>
                <StyledButton type="button" onClick={pageForward} disabled={page === 10}>Next Page </StyledButton>
              </PageWrapper>
              <P>{`Page ${page} / 1`}</P>
            </Container>
          </BackgroundImgTestimony>
        </Container>
      </TestimoniesWrapper>
      <Carousel />
    </>
  )
}