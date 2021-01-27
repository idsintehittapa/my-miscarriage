import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useParams } from 'react-router-dom'

import { Footer } from '../components/Footer'

import {
  DetailWrapper,
  IconWrapper,
  Container,
  Svg,
  Details,
  DetailsTitle,
  CreatedAt,
  Question
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
      <DetailWrapper>
        <IconWrapper>
          <Route path='/testimonies/week/:week/:id'>
            <Link to={`/testimonies/week/${testimony.when_weeks}`}>
              <Svg />
            </Link>
          </Route>
        </IconWrapper>
        <Container>
          <Details>
            <DetailsTitle>{`${testimony.name}'s testimony`}</DetailsTitle>
            <CreatedAt>{moment(testimony.createdAt).format('ll')}</CreatedAt>
            <Question>When did you notice your miscarriage?</Question>
            <p>{`Week ${testimony.when_weeks_noticed}`}</p>
            <p>Describe your experienced physical pain level</p>
            <p>{testimony.physical_pain}</p>
            <p>And your experienced mental pain level?</p>
            <p>{testimony.mental_pain}</p>
            <p>Did you receive hospital care? </p>
            <p>{testimony.hospital}</p>
            <p>How was your period volume effected? </p>
            <p>{testimony.period_volume}</p>
            <p>Your period length? </p>
            <p>{testimony.period_length}</p>
            <p>Did your period pain increase? </p>
            <p>{testimony.period_pain}</p>
            <p>Share your story? </p>
            <p>{testimony.story}</p>
          </Details>
        </Container>
      </DetailWrapper>
      {/* this does not look pretty on phone view */}
      {/* <Footer /> */}
    </>
  )
}
