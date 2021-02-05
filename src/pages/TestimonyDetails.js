import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'

import { Footer } from '../components/Footer'

import {
  DetailWrapper,
  IconWrapper,
  Container,
  Svg,
  Details,
  Background,
  DetailsTitle,
  CreatedAt,
  AnswerHolder,
  ChatAnswer,
  QuestionHolder,
  Question,
  Answer
} from '../styles/Styles'

export const TestimonyDetails = () => {
  const [testimony, setTestimony] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8080/testimonies/${id}`)
      .then((response) => response.json())
      .then((json) => setTestimony(json))
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Background>
        <DetailWrapper>
          <Container>
            <Details>
              <IconWrapper>
                <Link to={`/testimonies/week/${testimony.when_weeks}`}>
                  <Svg />
                </Link>
              </IconWrapper>
              <DetailsTitle>{`${testimony.name}'s testimony`}</DetailsTitle>
              <CreatedAt>{moment(testimony.createdAt).format('ll')}</CreatedAt>
              <ChatAnswer>
                <QuestionHolder>
                  <Question>When did you notice your miscarriage?</Question>
                </QuestionHolder>
              </ChatAnswer>
              <ChatAnswer>
                <AnswerHolder>
                  <Answer>{`Week ${testimony.when_weeks_noticed}`}</Answer>
                </AnswerHolder>
              </ChatAnswer>
              <ChatAnswer>
                <QuestionHolder>
                  <Question>Describe your experienced physical pain level</Question>
                </QuestionHolder>
              </ChatAnswer>
              <ChatAnswer>
                <AnswerHolder>
                  <Answer>{testimony.physical_pain}</Answer>
                </AnswerHolder>
              </ChatAnswer>
              <ChatAnswer>
                <QuestionHolder>
                  <Question>And your experienced mental pain level?</Question>
                </QuestionHolder>
              </ChatAnswer>
              <ChatAnswer>
                <AnswerHolder>
                  <Answer>{testimony.mental_pain}</Answer>
                </AnswerHolder>
              </ChatAnswer>
              <ChatAnswer>
                <QuestionHolder>
                  <Question>Did you receive hospital care?</Question>
                </QuestionHolder>
              </ChatAnswer>
              <ChatAnswer>
                <AnswerHolder>
                  <Answer>{String(testimony.hospital)}</Answer>
                </AnswerHolder>
              </ChatAnswer>
              <ChatAnswer>
                <QuestionHolder>
                  <Question>How was your period volume effected?</Question>
                </QuestionHolder>
              </ChatAnswer>
              <ChatAnswer>
                <AnswerHolder>
                  <Answer>{testimony.period_volume}</Answer>
                </AnswerHolder>
              </ChatAnswer>
              <ChatAnswer>
                <QuestionHolder>
                  <Question>Your period length?</Question>
                </QuestionHolder>
              </ChatAnswer>
              <ChatAnswer>
                <AnswerHolder>
                  <Answer>{testimony.period_length}</Answer>
                </AnswerHolder>
              </ChatAnswer>
              <ChatAnswer>
                <QuestionHolder>
                  <Question>And your period pain?</Question>
                </QuestionHolder>
              </ChatAnswer>
              <ChatAnswer>
                <AnswerHolder>
                  <Answer>{testimony.period_pain}</Answer>
                </AnswerHolder>
              </ChatAnswer>
              <ChatAnswer>
                <QuestionHolder>
                  <Question>Share your story?</Question>
                </QuestionHolder>
              </ChatAnswer>
              <ChatAnswer>
                <AnswerHolder>
                  <Answer>{testimony.story}</Answer>
                </AnswerHolder>
              </ChatAnswer>
            </Details>
          </Container>
        </DetailWrapper>
      </Background>
      <Footer />
    </>
  )
}
