import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet'
import moment from 'moment'
import { useParams } from 'react-router-dom'

import { Card } from '../lib/Card'
import { Footer } from '../components/Footer'

import {
  DetailWrapper,
  IconWrapper,
  Container,
  Svg
} from '../styles/Styles'

export const TestimonyDetails = () => {
  const [testimony, setTestimony] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8080/testimonies/${id}`)
      .then((response) => response.json())
      .then((json) => setTestimony(json))
    console.log(testimony)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {/* <Helmet>
        <title>{TITLE}</title>
      </Helmet> */}
      <DetailWrapper>
        <IconWrapper>
          <Route path='/testimonies/week/:week/:id'>
            <Link to={`/testimonies/week/${testimony.when_weeks}`}>
              <Svg />
            </Link>
          </Route>
        </IconWrapper>
        <Container>
          <Card
            detailTitle={`${testimony.name}'s testimony`}
            createdAt={moment(testimony.createdAt).format('ll')}
            story={testimony.story} />
        </Container>
      </DetailWrapper>
      <Footer />
    </>
  )
}
