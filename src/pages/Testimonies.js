import React from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'

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
      <Grid
        container
        // justify="center"
        direction="row"
        wrap="wrap"
        spacing={5}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div>
            {cardInfo.map((cardInfo, key) => (
              <Card key={key} coverImg={cardInfo.Img} title={cardInfo.Week} secondaryText="2" />
            ))}
          </div>
        </Grid>
      </Grid>

    </>
  )
}