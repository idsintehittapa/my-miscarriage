import React from 'react'
import { Helmet } from 'react-helmet'

import { Card } from '../lib/Card'
import { Container } from '../styles/Styles'

const cardInfo = [
  {
    Week: 'Week 6',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 7',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 8',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 9',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 10',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 11',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 12',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 13',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 14',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 15',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 16',
    Img: 'https://www.fillmurray.com/300/200',
    Alt: 'Img of...'
  },
  {
    Week: 'Week 17',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 18',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 19',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 20',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Unknown Week',
    Img: 'https://www.fillmurray.com/300/200'
  }
]

export const Testimonies = () => {
  const TITLE = 'Testimonies'
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Container>
        {cardInfo.map((cardInfo, key) => (
          // <Card coverImg={"https://www.fillmurray.com/300/200"} title="week x" secondaryText="jada" />
          // <Card coverImg={cardInfo[0].Img} title={cardInfo[0].Week} secondaryText="1" />
          // <Card coverImg={cardInfo[1].Img} title={cardInfo[1].Week} secondaryText="2" />
          // <Card coverImg={cardInfo[2].Img} title={cardInfo[2].Week} secondaryText="3" /> */}
          <Card key={key} coverImg={cardInfo.Img} title={cardInfo.Week} secondaryText="2" />
        ))}
      </Container>

    </>
  )
}